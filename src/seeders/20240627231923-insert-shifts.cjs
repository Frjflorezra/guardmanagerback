"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Shifts",
      [
        {
          shift_id: 1,
          shift_name: "Morning",
          start_time: "00:00",
          end_time: "08:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          shift_id: 2,
          shift_name: "Day",
          start_time: "08:00",
          end_time: "16:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          shift_id: 3,
          shift_name: "Night",
          start_time: "16:00",
          end_time: "00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Shifts", null, {});
  },
};
