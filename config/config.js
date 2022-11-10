const mongoose = require("mongoose");
const { MONGO_URI } = require("./keys");

const dbConnection = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database succefullu created");
    } catch (error) {
        console.error(error);
        throw new Error("Error while inicialiting database");
    }
};

module.exports = {
    dbConnection,
};