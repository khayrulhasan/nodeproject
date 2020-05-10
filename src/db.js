const Sequelize = require('sequelize');
const CONNECTION = process.env.DATABASE || 'postgres://myuser:mypass@localhost:5432/mydb';
const db = new Sequelize(CONNECTION);

//Check databaes connection
db.authenticate()
    .then(() => {
        console.log('databae connection ok');
    }).catch(e => {
        console.log('databae connection failed');
});


const User = db.define('users', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
});

const Direction = db.define('directions',{
    destination: Sequelize.STRING,
    hash:Sequelize.STRING
});

module.exports = {
    db,
    User,
    Direction
};   