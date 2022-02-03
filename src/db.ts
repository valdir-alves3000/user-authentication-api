import { Pool } from "pg";

const connectionString =
  "postgresql://dbuser:secretpassword@database.server.com:3211/mydb";

const db = new Pool({ connectionString });

export default db;
