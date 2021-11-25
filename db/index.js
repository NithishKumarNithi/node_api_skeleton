const Mongodb = require('mongodb').MongoClient;
const config = require('../config');

let db = null;
let dbConnection = {}

module.exports = dbConnection;

dbConnection.connect = () => {
        try{
            const client = new Mongodb(config.MONGO_URI);
            client.connect();
            db = client.db(config.MONGO_DB);
            console.log("db established");
        }
        catch(err){
            console.log(err);
        }

        return db;
    }

dbConnection.db = () =>  db,

dbConnection.init = () => db == null ? dbConnection.connect() : dbConnection.db();

