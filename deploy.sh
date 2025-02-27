#!/bin/bash

# Variables
APP_NAME="analytechs"
APP_DIR="/var/www/$APP_NAME"
BACKUP_DIR="/var/backups/$APP_NAME"
LOG_DIR="/var/log/$APP_NAME"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Arrêter le script en cas d'erreur
set -e

echo "Déploiement de l'application $APP_NAME..."

# Vérifier les prérequis
command -v docker >/dev/null 2>&1 || { echo "Docker est requis mais n'est pas installé."; exit 1; }
command -v docker-compose >/dev/null 2>&1 || { echo "Docker Compose est requis mais n'est pas installé."; exit 1; }
command -v nginx >/dev/null 2>&1 || { echo "nginx est requis mais n'est pas installé."; exit 1; }

# Créer les répertoires nécessaires s'ils n'existent pas
echo "Vérification des répertoires..."
for dir in "$APP_DIR" "$BACKUP_DIR" "$LOG_DIR"; do
    if [ ! -d "$dir" ]; then
        sudo mkdir -p "$dir"
        echo "Création de $dir"
    fi
done

sudo chown -R $USER:$USER "$APP_DIR" "$BACKUP_DIR" "$LOG_DIR"

# Sauvegarder la version actuelle si elle existe
if [ -d "$APP_DIR" ] && [ "$(ls -A $APP_DIR)" ]; then
    echo "Sauvegarde de la version actuelle..."
    tar -czf "$BACKUP_DIR/backup_$TIMESTAMP.tar.gz" -C "$APP_DIR" .
fi

# Copier le fichier .env si nécessaire
if [ ! -f .env ]; then
    if [ -f .env.example ]; then
        echo "Création du fichier .env à partir de .env.example..."
        cp .env.example .env
        echo "ATTENTION: Veuillez éditer le fichier .env avec vos valeurs!"
        exit 1
    else
        echo "Erreur: Fichier .env.example non trouvé!"
        exit 1
    fi
fi

# Arrêter les conteneurs existants
echo "Arrêt des conteneurs existants..."
docker-compose down

# Construire et démarrer les conteneurs
echo "Construction et démarrage des conteneurs..."
docker-compose up -d --build

# Vérifier que les conteneurs sont en cours d'exécution
echo "Vérification des conteneurs..."
if ! docker-compose ps | grep -q "Up"; then
    echo "Erreur: Les conteneurs ne sont pas en cours d'exécution!"
    exit 1
fi

# Configuration des permissions
echo "Configuration des permissions..."
sudo chown -R www-data:www-data "$APP_DIR"
sudo chmod -R 755 "$APP_DIR"

# Vérifier la configuration Nginx
echo "Vérification de la configuration Nginx..."
sudo nginx -t

# Si la vérification est OK, recharger Nginx
if [ $? -eq 0 ]; then
    echo "Rechargement de Nginx..."
    sudo systemctl reload nginx
else
    echo "Erreur dans la configuration Nginx. Restauration de la sauvegarde..."
    if [ -f "$BACKUP_DIR/backup_$TIMESTAMP.tar.gz" ]; then
        docker-compose down
        rm -rf "$APP_DIR"/*
        tar -xzf "$BACKUP_DIR/backup_$TIMESTAMP.tar.gz" -C "$APP_DIR"
        docker-compose up -d
        sudo systemctl reload nginx
        echo "Restauration effectuée."
        exit 1
    fi
fi

# Nettoyage des anciennes sauvegardes (garder les 5 dernières)
echo "Nettoyage des anciennes sauvegardes..."
cd "$BACKUP_DIR" && ls -t *.tar.gz | tail -n +6 | xargs -r rm

# Log du déploiement
echo "[$TIMESTAMP] Déploiement effectué avec succès" >> "$LOG_DIR/deployments.log"

echo "Déploiement terminé avec succès !"