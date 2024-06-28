"use strict";
export default (sequelize, DataTypes) => {
  const Guard = sequelize.define("Guard", {
    guard_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull:false,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    cellphone: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true, // Ensures email is unique
      allowNull: false,
    },
    address: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    }
  });

  Guard.associate = (models) => {
    Guard.belongsTo(models.User, { foreignKey: "user_id" });
    Guard.hasMany(models.Schedule, { foreignKey: "guard_id" });
  };
  return Guard;
};
