# 🐳 Mémo Docker

## Installation de Docker

### Sur Windows
1. **Prérequis**
   - Windows 10 64-bit: Pro, Enterprise, ou Education (Build 16299 ou plus récent)
   - Activer la virtualisation dans le BIOS
   - WSL2 (Windows Subsystem for Linux 2)

2. **Installation de WSL2**
```powershell
# Activer WSL
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

# Activer la fonctionnalité "Plateforme de machine virtuelle"
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

# Définir WSL2 comme version par défaut
wsl --set-default-version 2
```

3. **Installation de Docker Desktop**
   - Télécharger Docker Desktop depuis [le site officiel](https://www.docker.com/products/docker-desktop)
   - Exécuter l'installateur
   - Suivre les instructions d'installation
   - Redémarrer Windows après l'installation

4. **Vérification de l'installation**
```powershell
# Vérifier la version de Docker
docker --version

# Vérifier que tout fonctionne avec un conteneur test
docker run hello-world
```

### Sur Ubuntu/Debian
```bash
# Mise à jour du système
sudo apt update

# Installation des prérequis
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Ajout de la clé GPG officielle Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Ajout du repository Docker
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list

# Installation de Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Installation de Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Ajout de l'utilisateur au groupe docker
sudo usermod -aG docker $USER
```

## Commandes Docker essentielles

### Gestion des images
```bash
# Télécharger une image
docker pull <image>:<tag>

# Lister les images
docker images

# Supprimer une image
docker rmi <image>

# Construire une image
docker build -t <nom>:<tag> .
```

### Gestion des conteneurs
```bash
# Créer et démarrer un conteneur
docker run -d --name <nom> <image>

# Lister les conteneurs actifs
docker ps

# Lister tous les conteneurs
docker ps -a

# Arrêter un conteneur
docker stop <conteneur>

# Démarrer un conteneur
docker start <conteneur>

# Supprimer un conteneur
docker rm <conteneur>

# Logs d'un conteneur
docker logs <conteneur>

# Shell dans un conteneur
docker exec -it <conteneur> bash
```

### Gestion des volumes
```bash
# Créer un volume
docker volume create <nom>

# Lister les volumes
docker volume ls

# Supprimer un volume
docker volume rm <nom>
```

### Docker Compose
```bash
# Démarrer les services
docker-compose up -d

# Arrêter les services
docker-compose down

# Voir les logs
docker-compose logs

# Reconstruire les images
docker-compose build

# Redémarrer un service
docker-compose restart <service>
```

### Nettoyage
```bash
# Supprimer les conteneurs arrêtés
docker container prune

# Supprimer les images non utilisées
docker image prune

# Supprimer les volumes non utilisés
docker volume prune

# Tout nettoyer (conteneurs, images, volumes)
docker system prune -a
```

### Options utiles
```bash
# Mapping de ports
-p 8080:80

# Montage de volume
-v /chemin/local:/chemin/conteneur

# Variables d'environnement
-e CLE=VALEUR

# Limites de ressources
--memory 512m
--cpus 0.5
```

## Exemple de fichiers Docker pour ce projet

### docker-compose.yml
```yaml
version: '3.8'

services:
  frontend:
    build: 
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - VITE_APP_TITLE=Analytechs
      - VITE_APP_DESCRIPTION=Solutions de Business Intelligence, Data Analytics et Conseil en Management
      - VITE_DOMAIN=analytechs.tech
      - VITE_STRAPI_URL=http://backend:1337
      - VITE_STRAPI_TOKEN=${STRAPI_TOKEN}
    volumes:
      - ./frontend:/app
      - /app/node_modules
    depends_on:
      - backend

  backend:
    build: 
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "1337:1337"
    environment:
      - HOST=0.0.0.0
      - PORT=1337
      - APP_KEYS=${APP_KEYS}
      - API_TOKEN_SALT=${API_TOKEN_SALT}
      - ADMIN_JWT_SECRET=${ADMIN_JWT_SECRET}
      - TRANSFER_TOKEN_SALT=${TRANSFER_TOKEN_SALT}
      - DATABASE_CLIENT=postgres
      - DATABASE_HOST=db
      - DATABASE_PORT=5432
      - DATABASE_NAME=analytechs
      - DATABASE_USERNAME=analytechs_user
      - DATABASE_PASSWORD=${DB_PASSWORD}
      - DATABASE_SSL=false
    volumes:
      - ./backend:/app
      - /app/node_modules
    depends_on:
      - db

  db:
    image: postgres:14-alpine
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_DB=analytechs
      - POSTGRES_USER=analytechs_user
      - POSTGRES_PASSWORD=${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Frontend Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

### Backend Dockerfile
```dockerfile
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 1337

# Start the application
CMD ["npm", "start"]
```

### .env.example
```env
# Frontend
VITE_APP_TITLE=Analytechs
VITE_APP_DESCRIPTION=Solutions de Business Intelligence, Data Analytics et Conseil en Management
VITE_DOMAIN=analytechs.tech
VITE_STRAPI_URL=http://localhost:1337
VITE_STRAPI_TOKEN=your_strapi_token_here

# Backend
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys-here
API_TOKEN_SALT=your-token-salt-here
ADMIN_JWT_SECRET=your-admin-jwt-secret-here
TRANSFER_TOKEN_SALT=your-transfer-token-salt-here

# Database
DB_PASSWORD=your_secure_password_here
POSTGRES_DB=analytechs
POSTGRES_USER=analytechs_user
```

### Script de déploiement (deploy.sh)
```bash
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

# Créer les répertoires nécessaires
for dir in "$APP_DIR" "$BACKUP_DIR" "$LOG_DIR"; do
    if [ ! -d "$dir" ]; then
        sudo mkdir -p "$dir"
        echo "Création de $dir"
    fi
done

sudo chown -R $USER:$USER "$APP_DIR" "$BACKUP_DIR" "$LOG_DIR"

# Sauvegarder la version actuelle
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

# Déploiement Docker
echo "Arrêt des conteneurs existants..."
docker-compose down

echo "Construction et démarrage des conteneurs..."
docker-compose up -d --build

# Vérification
if ! docker-compose ps | grep -q "Up"; then
    echo "Erreur: Les conteneurs ne sont pas en cours d'exécution!"
    exit 1
fi

# Configuration Nginx et fin du déploiement
echo "Configuration des permissions..."
sudo chown -R www-data:www-data "$APP_DIR"
sudo chmod -R 755 "$APP_DIR"

echo "Vérification de la configuration Nginx..."
sudo nginx -t && sudo systemctl reload nginx

echo "[$TIMESTAMP] Déploiement effectué avec succès" >> "$LOG_DIR/deployments.log"
echo "Déploiement terminé avec succès !"
```

## Commandes utiles pour ce projet
```bash
# Démarrer l'environnement de développement
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Redémarrer un service spécifique
docker-compose restart frontend

# Arrêter l'environnement
docker-compose down

# Reconstruire les images
docker-compose build

# Accéder au shell du conteneur frontend
docker-compose exec frontend sh

# Accéder au shell du conteneur backend
docker-compose exec backend sh

# Accéder à la base de données
docker-compose exec db psql -U analytechs_user -d analytechs
```

## Résolution des problèmes courants sous Windows

### WSL2 et Docker Desktop
1. **Docker Desktop ne démarre pas**
   - Vérifier que WSL2 est correctement installé : `wsl --status`
   - Vérifier que la virtualisation est activée dans le BIOS
   - Redémarrer le service Docker : `net stop com.docker.service && net start com.docker.service`

2. **Problèmes de performance**
   - Limiter la mémoire utilisée par WSL2 dans `%UserProfile%\.wslconfig` :
   ```
   [wsl2]
   memory=6GB
   processors=4
   ```

3. **Problèmes de montage de volumes**
   - Utiliser des chemins Windows style dans docker-compose : `C:\Users\...`
   - Ou utiliser des chemins style WSL : `/mnt/c/Users/...`

### Permissions et accès
1. **Problèmes de permissions sur les volumes**
   - Utiliser `chmod` dans le Dockerfile
   - Définir l'utilisateur avec `USER` dans le Dockerfile
   - Utiliser `chown` pour les volumes montés

2. **Accès refusé aux ports**
   - Vérifier qu'aucune application n'utilise déjà les ports
   - Exécuter PowerShell en tant qu'administrateur
   - Vérifier les règles du pare-feu Windows

### Networking
1. **Problèmes de résolution DNS**
   - Éditer `%UserProfile%\.wslconfig` :
   ```
   [wsl2]
   dns=8.8.8.8
   ```

2. **Conteneurs inaccessibles**
   - Vérifier la configuration réseau de Docker Desktop
   - Redémarrer le service Docker
   - Vérifier les règles du pare-feu Windows