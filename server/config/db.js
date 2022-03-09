const mongoose = require('mongoose');

module.exports = connectDB = async () => {
  const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/blog-site'
  
  try {
    const conn = await mongoose.connect(dbURL)
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
