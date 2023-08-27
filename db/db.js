const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('bien ahi te pudiste conectar a la base de datos')
    } catch {
        console.log('mal ahi no te pudiste conectar a la base de datos')
    }
}

module.exports = { connect }