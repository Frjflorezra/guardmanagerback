import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()
// traer las variables
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;
const dbDialect = process.env.DB_DIALECT;
// creando la instancia
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDialect,
});

export default sequelize
