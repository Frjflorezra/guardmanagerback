# Proyecto Final GuardManager - Bootcamp Fullstack MINTIC

## Descripción

Este es el Proyecto Final para el Bootcamp Fullstack de MINTIC, centrado en la parte frontend. El objetivo de este proyecto es demostrar las habilidades y conocimientos adquiridos en el desarrollo de aplicaciones web utilizando tecnologías modernas de frontend.

## Tecnologías Utilizadas

- **Nodejs**: Este es un entorno de ejecución para JavaScript.
- **Express js**: Express JS es un marco que se ha superpuesto en la parte superior de Node JS.
- **MySQL**: Es un sistema de gestión de bases de datos relacional.
- **JWTs**: JSON Web Tokens para la autenticacion de usuario.
## clonar el projecto


usar 
```bash
git clone https://github.com/Frjflorezra/guardmanager.git
cd guardmanager
npm install
```
crean un archivo .env
ponen las variables de entorno del projecto

Iniciar el projecto
```bash
node --watch index.js
```

Crear tablas en la base de datos y utilizar el seeder
```bash
npm install sequelize-cli
// para crear tablas
npx sequelize-cli db:migrate
// para borrar las tablas 
npx sequelize-cli db:migrate:undo:all
// para utilizar las seed y llenar las tablas 
npx sequelize-cli db:seed:all
// para borrar los datos de la tabla
npx sequelize-cli db:seed:undo:all  
```
