const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.mongoURI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Mongo Successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); 
  }
};

module.exports = connectToMongo;
