module.exports = {
    apps: [
      {
        name: "", // Nom de l'application
        script: "src/app.ts", // Fichier TypeScript principal
        interpreter: "ts-node", // Utiliser ts-node pour exécuter TypeScript
        watch: true, // Redémarrer automatiquement en cas de modification
        env: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
};
  