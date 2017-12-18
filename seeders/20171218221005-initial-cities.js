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
    let curCountry = 'United States';
    let curState = '';

    console.log('Hey fuckers!');

    for (var country = 0; country < cities.length; country++) {
      curCountry = Object.keys(cities)[country];
      console.log(curCountry);
      for (state in Object.keys(cities[curCountry])) {
        curState = Object.keys(cities[curCountry])[state];
        for (city in cities[curCountry][curState]) {
          inserts.push({
            name: cities[curCountry][curState][city],
            state: curState,
            country: curCountry
          });
        }
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
