'use strict';
export default (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    location_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull:false,
    },
    location_name: DataTypes.STRING,
    address: {
      type: DataTypes.STRING,
      unique: true, // Ensures address is unique
      allowNull: false,
    },
    city: DataTypes.STRING,
    cellphone: {
      type: DataTypes.STRING,
      unique: true, // Ensures cellphone is unique
      allowNull: false,
    },
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

  Location.associate = models => {
    Location.hasMany(models.Schedule, { foreignKey: 'location_id' });
  };

  return Location;
};