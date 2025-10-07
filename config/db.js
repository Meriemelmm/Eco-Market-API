const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URL = process.env.MONGODB_URL;

const db = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URL);
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (err) {
    console.error(' Erreur de connexion à MongoDB:', err.message);
  }
};

module.exports = db;
