module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'analytechs'),
      user: env('DATABASE_USERNAME', 'analytechs_user'),
      password: env('DATABASE_PASSWORD', 'your_secure_password_here'),
      ssl: env.bool('DATABASE_SSL', false) ? { rejectUnauthorized: false } : false,
    },
  },
});
