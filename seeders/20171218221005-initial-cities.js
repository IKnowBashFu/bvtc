'use strict';

const cities = require('../data/cities.json');


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    return queryInterface.bulkInsert('Person', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});
    */
    let inserts = [];
    for (const country in cities) {
        for (const state in cities[country]) {
          cities[country][state].forEach(town => {
            inserts.push({
              name: town,
              state: state,
              country: country
            });
          });
        }
    }
    return queryInterface.bulkInsert('Cities', inserts, {});
  },
  
  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
