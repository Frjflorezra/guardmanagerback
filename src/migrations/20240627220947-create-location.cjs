'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Locations', {
      location_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location_name: {
        type: Sequelize.STRING
      },
      address: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      cellphone: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Locations');
  }
};