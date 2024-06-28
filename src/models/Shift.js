'use strict';
export default (sequelize, DataTypes) => {
  const Shift = sequelize.define('Shift', {
    shift_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull:false,
    },
    shift_name: DataTypes.STRING,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
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

  Shift.associate = models => {
    Shift.hasMany(models.Schedule, { foreignKey: 'shift_id' });
  };

  return Shift;
};