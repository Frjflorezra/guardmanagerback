'use strict';
export default (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    schedule_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    start_date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY,
    location_id: DataTypes.INTEGER,
    shift_id: DataTypes.INTEGER,
    guard_id: DataTypes.INTEGER
  });

  Schedule.associate = models => {
    Schedule.belongsTo(models.Location, { foreignKey: 'location_id' });
    Schedule.belongsTo(models.Shift, { foreignKey: 'shift_id' });
    Schedule.belongsTo(models.Guard, { foreignKey: 'guard_id' });
  };

  return Schedule;
};