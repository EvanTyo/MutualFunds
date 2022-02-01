// require the db configuration from the dbConfig file
const dbConfig = require('../config/dbConfig')
    
// require the sequelize Constructor and Datatypes from sequelize module
const { Sequelize, DataTypes } = require('sequelize')

// // construct the sequelize object using the constructor
// const sequelize = new Sequelize({ 
//     // use imported configurations from dbConfig
//     database: dbConfig.DB,
//     username: dbConfig.USER,
//     password: dbConfig.PASSWORD,
//     dialect: dbConfig.dialect,
//     host: dbConfig.HOST,
// })

// construct the sequelize object using the constructor
let sequelize = null;

if (process && process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres', 
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        define:{ 
            timestamps:false
        }
    });
} else {
    sequelize = new Sequelize(
    { // use imported configurations from dbConfig
        database: dbConfig.DB,
        username: dbConfig.USER,
        password: dbConfig.PASSWORD,
        dialect: dbConfig.dialect,
        host: dbConfig.HOST,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        define:{ 
            timestamps:false
        }
    });
}

// authenticate will test the connection with DB and return a promise
sequelize.authenticate()
    .then(() => { // successfully connected to DB
        console.log("connected to Postgres DB")
    })
    .catch(e => {// failed connecting to DB
        console.log('unable to connect to Postgres DB' + e)
})

// create a db object to work with the sequelize table
const db = {}

// create an attribute storing the previously created sequelize instance
db.sequelize = sequelize

// get the cusomters model - our table name will be cusomters as set in the following line
db.MutualFunds = require('./mutualFundsModel')(sequelize, DataTypes)

// sync the db by running the model
// "force: false" ensures that the table is not created again every time the program runs
db.sequelize.sync({ force: false }).then(() => {
    console.log('DB synced with sequelize')
}).catch((error) => {
    console.log('Error syncing the DB to sequelize' + error)
})

module.exports = db