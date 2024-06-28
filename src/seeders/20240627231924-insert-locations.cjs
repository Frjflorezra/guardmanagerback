'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Locations', [{"location_id":1,"location_name":"eu","address":"Apt 1197","city":"Jakusko","cellphone":"512 330 6204"},
      {"location_id":2,"location_name":"mi","address":"Suite 99","city":"Rennes","cellphone":"828 883 5723"},
      {"location_id":3,"location_name":"venenatis","address":"PO Box 54235","city":"Granada","cellphone":"972 179 3153"},
      {"location_id":4,"location_name":"accumsan","address":"Apt 953","city":"Kalisari","cellphone":"956 704 5387"},
      {"location_id":5,"location_name":"luctus","address":"Room 1463","city":"Manique","cellphone":"292 861 7682"},
      {"location_id":6,"location_name":"adipiscing","address":"Suite 89","city":"Jinchang","cellphone":"766 556 6265"},
      {"location_id":7,"location_name":"imperdiet","address":"Room 414","city":"Santa Isabel","cellphone":"574 179 1263"},
      {"location_id":8,"location_name":"nulla","address":"PO Box 91665","city":"Xianlin","cellphone":"450 432 8509"},
      {"location_id":9,"location_name":"libero","address":"Apt 1558","city":"Shiwan","cellphone":"569 588 0523"},
      {"location_id":10,"location_name":"mauris","address":"PO Box 26225","city":"Caledon","cellphone":"935 355 1066"},
      {"location_id":11,"location_name":"etiam","address":"Room 310","city":"Kanthararom","cellphone":"633 648 2631"},
      {"location_id":12,"location_name":"vulputate","address":"Room 1007","city":"Yangcheng","cellphone":"334 879 8293"},
      {"location_id":13,"location_name":"imperdiet","address":"Room 1163","city":"Bāzārak","cellphone":"659 323 7191"},
      {"location_id":14,"location_name":"in","address":"Apt 1794","city":"Tanjungsari Barat","cellphone":"283 815 0285"},
      {"location_id":15,"location_name":"ut","address":"17th Floor","city":"Chatian","cellphone":"484 419 4441"},
      {"location_id":16,"location_name":"nunc","address":"Room 1161","city":"Miyang","cellphone":"134 454 7902"},
      {"location_id":17,"location_name":"nulla","address":"Suite 72","city":"Kajok","cellphone":"632 505 5116"},
      {"location_id":18,"location_name":"mauris","address":"Suite 39","city":"Jibu Hulangtu","cellphone":"380 767 9621"},
      {"location_id":19,"location_name":"molestie","address":"PO Box 14967","city":"Danja","cellphone":"755 603 8098"},
      {"location_id":20,"location_name":"luctus","address":"5th Floor","city":"Collingwood","cellphone":"650 700 8058"}], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Locations', null, {});
  }
};
