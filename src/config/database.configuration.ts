import { env } from "../env";

export default () => ({
  db_kind: 'postgres',
  db_host: env.POSTGRES_HOST || 'localhost',
  db_port: env.POSTGRES_PORT
    ? parseInt(env.POSTGRES_PORT, 10)
    : 5432,
  db_user: env.POSTGRES_USER || 'root',
  db_pass: env.POSTGRES_PASSWORD || 'root',
  db_name: env.POSTGRES_DB || 'basic',
});
