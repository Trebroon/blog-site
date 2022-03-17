const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

// routes
const blogRoutes = require('./routes/blogRoutes')


const port = process.env.PORT || 5000

const app = express();
app.use(express.json());
app.use(cors());

connectDB();


app.use('/', blogRoutes)

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
})