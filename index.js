import sequelize from "./src/config/db.js";
import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from 'dotenv'

dotenv.config()

console.log("Api node ");

//creando servidor de node
const app = express();
const Port = process.env.PORT;
// configurando cors
app.use(cors());
// conversion de datos
app.use(json());
app.use(urlencoded({ extended: true }));
//configurar rutas



//sincronizar base de datos y levantar servidor
sequelize
  .sync()
  .then(() => {
    app.listen(Port, () => {
      console.log("server is running on port", Port);
    });
  })
  .catch((err) => {
    console.error("unable to connect to the database:", err);
  });