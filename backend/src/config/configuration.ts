export default () => ({
  api: {
    port: parseInt(process.env.API_REST_PORT, 10) || 3000,
    prefix: process.env.API_BASE_URL || '',
  },
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 3366,
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
  },
});
