

const mongoose = require('mongoose');
const ConnectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to DB successfully");
    } catch (e) {
        console.log("Error while connecting to db", e);
        process.exit(1);
    }
}

module.exports = ConnectToDb;
