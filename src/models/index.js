"use strict";

import { readdirSync } from "fs";
import { basename as _basename, join, dirname as _dirname } from "path";
import Sequelize, { DataTypes } from "sequelize";
import { env as _env } from "process";

import { fileURLToPath } from "url";
import configData from "../config/config.js"/*  assert { type: 'json' } */;
const __filename = fileURLToPath(import.meta.url);
const __dirname = _dirname(__filename);
const basename = _basename(__filename);
const env = _env.NODE_ENV || 'development';
const config = configData[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(_env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}


import Guard from "./Guard.js";
import Session from "./Session.js";
import User from "./User.js";
import Location from "./Location.js";
import Schedule from "./Schedule.js";
import Shift from "./Shift.js";

const models = [Guard, User, Location, Schedule, Shift, Session];
models.forEach((modelImport) => {
  const model = modelImport(sequelize, DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

export default db;
