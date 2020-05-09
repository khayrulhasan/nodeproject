const Sequelize = require('sequelize');

//database connection
const database = new Sequelize('mydb', 'myuser', 'mypass', {
    host: 'localhost',
    dialect: 'postgres'
});
//or
//const sequelize = new Sequelize('postgres://myuser:mypass@postgres.com:5432/mydb');


//Check databaes connection
database.authenticate()
    .then(()=>{
        console.log('databae connection ok');
    }).catch(e=>{
        console.log('databae connection failed');
    });



//update schema
database.sync()
    .then(e=>{
        console.log('database sync');
    }).catch(e=>{
        console.log('database sync failed');
    });

module.exports = {
    database
};    
