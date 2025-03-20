# 🚀 Analytechs Burkina Faso

![Analytechs](https://img.shields.io/badge/Analytechs-Data%20%26%20Dev%20%26%20Management-blue)
![Version](https://img.shields.io/badge/version-1.0.0-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-blue)
![React](https://img.shields.io/badge/react-%5E18.2.0-blue)
![TypeScript](https://img.shields.io/badge/typescript-%5E5.3.3-blue)
![Strapi](https://img.shields.io/badge/strapi-4.20.1-blueviolet)

Solutions innovantes de Business Intelligence, Data Analytics et Conseil en Management au Burkina Faso.

## 📋 Table des matières

- [Aperçu](#-aperçu)
- [Technologies](#-technologies)
- [Architecture](#-architecture)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Développement](#-développement)
- [Déploiement](#-déploiement)
- [Sécurité](#-sécurité)
- [Contribution](#-contribution)
- [Licence](#-licence)
- [Contact](#-contact)

## 🌟 Aperçu

Analytechs est une plateforme complète offrant des solutions de Business Intelligence, Data Analytics et Conseil en Management. Notre application combine un frontend moderne en React avec un backend robuste en Strapi, le tout orchestré dans une architecture conteneurisée.

### Fonctionnalités principales

- 📊 Tableaux de bord interactifs
- 📈 Analyses de données avancées
- 📱 Interface responsive et moderne
- 🔒 Authentification sécurisée
- 🌐 API RESTful
- 📝 Gestion de contenu dynamique
- 🔄 Intégration continue

## 🛠 Technologies

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)
- React Router DOM
- Axios

### Backend
- Strapi 4
- PostgreSQL
- Node.js

### Infrastructure
- Docker & Docker Compose
- Nginx
- Let's Encrypt
- PostgreSQL

## 🏗 Architecture

```
analytechs/
├── frontend/                 # Application React
│   ├── Dockerfile           # Configuration Docker frontend
│   ├── nginx.conf           # Configuration Nginx
│   ├── src/                 # Code source React
│   └── ...
├── backend/                 # API Strapi
│   ├── Dockerfile          # Configuration Docker backend
│   ├── config/            # Configuration Strapi
│   └── ...
├── docker-compose.yml       # Configuration Docker Compose
├── deploy.sh               # Script de déploiement
├── .env.example            # Example de variables d'environnement
└── README.md               # Documentation
```

## 🚀 Installation

### Prérequis

- Docker et Docker Compose
- Node.js >= 18.0.0 (pour le développement local)
- Git

### Installation avec Docker (Recommandé)

1. Cloner le dépôt
```bash
git clone https://github.com/votre-organisation/analytechs.git
cd analytechs
```

2. Configurer les variables d'environnement
```bash
cp .env.example .env
# Éditer .env avec vos valeurs
```

3. Lancer avec Docker Compose
```bash
docker-compose up -d
```

L'application sera disponible sur :
- Frontend : http://localhost
- Backend : http://localhost:1337
- Admin Strapi : http://localhost:1337/admin

### Installation locale (Développement)

1. Frontend
```bash
cd frontend
npm install
npm run dev
```

2. Backend
```bash
cd backend
npm install
npm run develop
```

## ⚙️ Configuration

### Variables d'environnement

#### Frontend (.env)
```env
VITE_APP_TITLE=Analytechs
VITE_APP_DESCRIPTION=Solutions de Business Intelligence
VITE_DOMAIN=analytechs.tech
VITE_STRAPI_URL=http://localhost:1337
VITE_STRAPI_TOKEN=your_token

# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

#### Backend (.env)
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-salt
ADMIN_JWT_SECRET=your-secret
DATABASE_CLIENT=postgres
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_NAME=analytechs
DATABASE_USERNAME=analytechs_user
DATABASE_PASSWORD=your_password
```

## 🖥 Déploiement

### Déploiement sur VPS

1. Prérequis serveur
```bash
# Mise à jour du système
sudo apt update && sudo apt upgrade -y

# Installation de Docker et Docker Compose
sudo apt install -y docker.io docker-compose

# Ajout de l'utilisateur au groupe docker
sudo usermod -aG docker $USER
```

2. Configuration Nginx et SSL
```bash
# Installation de Nginx et Certbot
sudo apt install -y nginx certbot python3-certbot-nginx

# Obtention des certificats SSL
sudo certbot --nginx -d votredomaine.com
```

3. Déploiement avec le script
```bash
# Rendre le script exécutable
chmod +x deploy.sh

# Lancer le déploiement
./deploy.sh
```

### Configuration Nginx

Le fichier `nginx.conf` est déjà configuré pour :
- Redirection HTTP vers HTTPS
- Gestion des certificats SSL
- Proxy vers les services Docker
- Compression Gzip
- Cache des assets statiques
- Headers de sécurité

### Surveillance et maintenance

```bash
# Voir les logs des conteneurs
docker-compose logs -f

# Redémarrer les services
docker-compose restart

# Mise à jour des conteneurs
docker-compose pull
docker-compose up -d

# Sauvegarder la base de données
docker-compose exec db pg_dump -U analytechs_user analytechs > backup.sql
```

## 🔒 Sécurité

- HTTPS forcé en production
- Headers de sécurité configurés
- Rate limiting
- CORS configuré
- Validation des données
- Authentification JWT
- Politiques de sécurité Strapi

## 👥 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

## 📧 Contact

Analytechs Burkina Faso - contact@analytechs.tech

Site web : [https://analytechs.tech](https://analytechs.tech)