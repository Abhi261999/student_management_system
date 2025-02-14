const mongoose = require('mongoose');

const mongoURL = ('mongodb://localhost:27017/school');
console.log("MongoDB Connection URL");



const db = mongoose.connection;

db.on('connected', ()=> {
    console.log('Connected to MongoDB server')
})

db.on('error', ()=> {
   console.log('Connection failed!')
}) 

db.on('disconnected', ()=> {
   console.log('Disconnected from MongoDB server')
})

//export the database connection
module.exports = db;