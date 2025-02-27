module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        localServer: {
          folderPath: './public/uploads',  // ✅ Assure-toi que ce chemin est bien défini
          baseUrl: '/uploads',
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },

  'users-permissions': {
    config: {
      jwtSecret: env('ADMIN_JWT_SECRET', 'your-secure-token-here'),
    },
  },
});
