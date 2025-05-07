FROM node:20.15.0-buster-slim

WORKDIR /workspace

# 📦 Installer git et les outils nécessaires
USER root

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y git && \
    rm -rf /var/lib/apt/lists/*

# 📦 Installer les packages globaux en tant que root
RUN npm install -g typescript ts-node nodemon

# ✅ Copier le projet dans l’image
COPY . .

# ✅ Corriger les permissions du dossier de travail
RUN chown -R node:node /workspace

# 👤 Passer à l’utilisateur non-root
USER node

CMD ["bash"]
