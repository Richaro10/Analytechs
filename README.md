# 🚀 Analytechs

![Analytechs](https://img.shields.io/badge/Analytechs-Data%20%26%20Dev%20%26%20Management-blue)
![Version](https://img.shields.io/badge/version-1.0.0-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-blue)
![React](https://img.shields.io/badge/react-%5E18.2.0-blue)
![TypeScript](https://img.shields.io/badge/typescript-%5E5.3.3-blue)
![Strapi](https://img.shields.io/badge/strapi-4.20.1-blueviolet)

Solutions de Business Intelligence, Data Analytics et Conseil en Management.

## 📋 Table des matières

- [Aperçu](#-aperçu)
- [Technologies](#-technologies)
- [Architecture](#-architecture)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Développement](#-développement)
- [Déploiement](#-déploiement)
- [Tests](#-tests)
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
- Docker
- Nginx
- Let's Encrypt
- GitHub Actions

## 🏗 Architecture

```
analytechs/
├── frontend/                 # Application React
│   ├── Dockerfile           # Configuration Docker frontend
│   ├── nginx.conf           # Configuration Nginx
│   ├── src/                 # Code source React
│   │   ├── assets/         # Ressources statiques
│   │   ├── components/     # Composants React réutilisables
│   │   ├── hooks/         # Hooks personnalisés
│   │   ├── lib/           # Utilitaires et configurations
│   │   ├── pages/         # Pages de l'application
│   │   └── types/         # Types TypeScript
│   ├── index.html          # Point d'entrée HTML
│   ├── package.json        # Dépendances frontend
│   ├── tailwind.config.js  # Configuration Tailwind
│   ├── tsconfig.json       # Configuration TypeScript
│   └── vite.config.ts      # Configuration Vite
│
├── backend/                 # API Strapi
│   ├── Dockerfile          # Configuration Docker backend
│   ├── config/            # Configuration Strapi
│   │   ├── admin.js       # Configuration admin
│   │   ├── database.js    # Configuration base de données
│   │   ├── middlewares.js # Middlewares
│   │   ├── plugins.js     # Plugins
│   │   └── server.js      # Configuration serveur
│   ├── src/               # Code source API
│   │   ├── api/          # Points d'entrée API
│   │   ├── middlewares/  # Middlewares personnalisés
│   │   ├── policies/     # Politiques de sécurité
│   │   └── utils/        # Utilitaires
│   └── package.json       # Dépendances backend
│
├── docker-compose.yml       # Configuration Docker Compose
├── deploy.sh               # Script de déploiement
├── .env.example            # Example de variables d'environnement
└── README.md               # Documentation
```

## 🚀 Installation

### Prérequis

- Node.js >= 18.0.0
- Docker et Docker Compose
- Git

### Installation locale

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

3. Lancer l'application avec Docker
```bash
docker-compose up -d
```

L'application sera disponible sur :
- Frontend : http://localhost:3000
- Backend : http://localhost:1337
- Admin Strapi : http://localhost:1337/admin

### Installation manuelle (développement)

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
```

#### Backend (.env)
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-salt
ADMIN_JWT_SECRET=your-secret
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=analytechs
DATABASE_USERNAME=user
DATABASE_PASSWORD=password
```

## 💻 Développement

### Scripts disponibles

Frontend :
```bash
npm run dev        # Démarre le serveur de développement
npm run build      # Build pour la production
npm run preview    # Prévisualise le build
npm run lint       # Vérifie le code
```

Backend :
```bash
npm run develop    # Mode développement
npm run start      # Mode production
npm run build      # Build pour la production
```

### Conventions de code

- ESLint pour le linting
- Prettier pour le formatage
- Conventional Commits pour les messages de commit
- TypeScript strict mode

## 📦 Déploiement

### Production

1. Construire les images
```bash
docker-compose -f docker-compose.prod.yml build
```

2. Déployer
```bash
./deploy.sh
```

### CI/CD

Le projet utilise GitHub Actions pour :
- Tests automatisés
- Builds de production
- Déploiement automatique
- Vérification de la qualité du code

## 🧪 Tests

### Frontend
```bash
npm test          # Lance les tests
npm run coverage  # Rapport de couverture
```

### Backend
```bash
npm run test      # Lance les tests
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

Analytechs - contact@analytechs.tech

Site web : [https://analytechs.tech](https://analytechs.tech)

## 🙏 Remerciements

- [React](https://reactjs.org/)
- [Strapi](https://strapi.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Docker](https://www.docker.com/)