const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

// routes
const blogRoutes = require('./routes/blogRoutes')

const app = express();
app.use(cors());
app.use(express.json());
app.use(mongoSanitize());

connectDB();

app.use('/api', blogRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
})