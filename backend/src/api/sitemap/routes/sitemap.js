module.exports = {
  routes: [
    {
      method: "GET",
      path: "/sitemap.xml",
      handler: "sitemap.sitemap", // Assurez-vous que ce nom correspond à votre méthode contrôleur
      config: {
        auth: false,
      },
    },
  ],
};
