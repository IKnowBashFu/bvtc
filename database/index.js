const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const City = sequelize.define('city', {
    name: Sequelize.STRING,
    state: Sequelize.STRING,
    country: Sequelize.STRING
}, {
    tableName: 'cities',
    timestamps: false
});

const Location = sequelize.define('location', {
    company: Sequelize.STRING,
}, {
    timestamps: false
});

City.hasOne(Location);

class Database {
    static testDB() {
        sequelize.sync()
        .then(() => City.create({
            name: 'Los Angeles',
            state: 'California',
            country: 'United States'
        }))
        .then(() => Location.create({
            company: 'Wallbert',
            cityId: 1
        }))
        .then(wallbert => {
            console.log(wallbert.toJSON());
        });
    }
}

module.exports = Database;