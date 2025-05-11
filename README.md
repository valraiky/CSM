Voici un exemple de `README.md` clair et structuré pour ton projet d'**authentification avec Node.js, TypeScript, JWT, bcrypt, Passport.js, POO et principes SOLID**, conteneurisé avec Docker et DevContainer :

---

````markdown
# 🛡️ Authentification Node.js avec TypeScript, JWT, Passport, Docker & SOLID

Ce projet implémente un système complet d'authentification **register/login** en **Node.js + TypeScript**, avec :

- 🔐 JWT pour l'authentification stateless
- 🔑 bcrypt pour le hachage sécurisé des mots de passe
- 🛂 Passport.js pour la stratégie JWT
- 🧱 Architecture orientée objet respectant les principes **SOLID**
- 🐳 Développement conteneurisé via **Docker** et **DevContainer** (VS Code)

---

## ⚙️ Stack technique

- Node.js 20
- TypeScript
- Express
- bcrypt
- passport + passport-jwt
- jsonwebtoken
- PostgreSQL
- Docker / Docker Compose
- DevContainer pour le développement

---

## 🚀 Démarrage rapide

### 🐳 Prérequis

- [Docker](https://www.docker.com/)
- [VS Code](https://code.visualstudio.com/) avec l'extension **Dev Containers**

### 🧪 Lancer dans DevContainer (VS Code)

1. Ouvre le dossier du projet dans VS Code
2. Clique sur `Reopen in Container` (DevContainer)
3. Le projet sera automatiquement monté, les dépendances installées.

### 📦 Installation manuelle (hors DevContainer)

```bash
npm install
````

### 📂 Configuration de l’environnement

Créer un fichier `.env` à la racine :

```env
PORT=3000
JWT_SECRET=your_super_secret
DATABASE_URL=postgres://postgres:postgres@db:5432/mydb
```

---

## 📁 Arborescence principale

```
.
├── src
│   ├── controllers
│   ├── dtos
│   ├── interfaces
│   ├── middlewares
│   ├── models
│   ├── repositories
│   ├── routes
│   ├── services
│   └── app.ts
├── .devcontainer
│   ├── devcontainer.json
│   └── Dockerfile
├── docker-compose.yml
├── tsconfig.json
└── README.md
```

---

## 🔐 Endpoints API

| Méthode | URL         | Description                               |
| ------: | ----------- | ----------------------------------------- |
|    POST | `/register` | Inscription d’un utilisateur              |
|    POST | `/login`    | Connexion et génération JWT               |
|     GET | `/me`       | Récupérer l’utilisateur auth (JWT requis) |

---

## ✅ Principes SOLID respectés

* **S**ingle Responsibility → chaque classe a une seule responsabilité
* **O**pen/Closed → services facilement extensibles sans être modifiés
* **L**iskov Substitution → interfaces génériques
* **I**nterface Segregation → interfaces spécifiques et claires
* **D**ependency Inversion → dépendances injectées via interfaces

---

## 🐞 Scripts utiles

```bash
# Démarrer en développement
npm run dev

# Compiler TypeScript
npm run build

# Lancer l’app compilée
npm start
```

---

# 🏥 API Résultats Cliniques - Centre de Santé

Cette API permet de récupérer les résultats des examens (cliniques, paracliniques, etc.) d'un patient, organisés par catégories et sous-catégories.

API Endpoint
🔍 Récupérer les résultats d’un patient
bash
Copier
Modifier
GET /patients/:id/structure

📥 Paramètres
id (number) — ID du patient à rechercher.

| Code | Description               |
| ---- | ------------------------- |
| 404  | Patient non trouvé        |
| 500  | Erreur interne du serveur |



## 📫 Auteur

Développé par **Natrefindazana Valeurin**
Email : [valeurinpavart@.com]
Github : https://github.com/valraiky

---

## 📝 Licence

Ce projet est open-source et libre d'utilisation.

```