const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

// routes
const blogRoutes = require('./routes/blogRoutes')


const port = process.env.PORT || 5000

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', blogRoutes)

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
})