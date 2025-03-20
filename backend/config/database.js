module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('POSTGRES_DB', 'analytechs'),
      user: env('POSTGRES_USER', 'analytechs_user'),
      password: env('POSTGRES_PASSWORD', 'your_secure_password_here'),
      ssl: env.bool('DATABASE_SSL', false) ? { rejectUnauthorized: false } : false,
      schema: 'public'
    },
    debug: false,
    acquireConnectionTimeout: 600000,
    pool: {
      min: 0,
      max: 10,
      createTimeoutMillis: 30000,
      acquireTimeoutMillis: 600000,
      idleTimeoutMillis: 20000,
      reapIntervalMillis: 20000,
      createRetryIntervalMillis: 200
    }
  }
});