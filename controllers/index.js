const database = require('../db');
const dbCollection = require('../db/operations')

let controller = {};

module.exports = controller;

const db = database.init();

controller.home = (req, res) => res.send('home');

controller.getUsers = (req, res) => {
    dbCollection.getAll(db,'users')
    .then( (result) => res.status(200).json(result) )
    .catch ( (err) =>  res.status(500).json({message: err}) ) 
};

controller.create = (req, res) => {
    dbCollection.insert(db,'users',req.body)
    .then ( (result) => res.status(200).json({message: "user created successfully"}) )
    .catch ( (err) =>  res.status(500).json({message: err}) ) 
    
}

controller.update = (req, res) => {
    res.send('update user');
}

controller.delete = (req, res) => {
    res.send('delete user');
}