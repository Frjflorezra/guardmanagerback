import db from './src/models/index.js'
import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from 'dotenv'
import adminRoutes from './src/routes/adminRoutes.js';
import guardRoutes from './src/routes/guardRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import { userAuthorized } from './src/middlewares/authMiddleware.js';

dotenv.config()

console.log("Api node ");

//creando servidor de node
const app = express();
const Port = process.env.PORT;
// configurando cors
app.use(cors());
// conversion de datos
app.use(json());
app.use(cookieParser())
app.use(urlencoded({ extended: true }));

//configurar rutas
// 
app.use('/', userAuthorized);
app.get('/', (req, res) => {
  const { user } = req.session;
  if (!user) return res.status(401).send("Unauthorized");
  res.send("okay");
});

app.use('/api', adminRoutes);
app.use('/api', authRoutes)
app.use('/api/guards', guardRoutes);





//sincronizar base de datos y levantar servidor
db.sequelize
  .sync()
  .then(() => {
    app.listen(Port, () => {
      console.log("server is running on port", Port);
    });
  })
  .catch((err) => {
    console.error("unable to connect to the database:", err);
  });