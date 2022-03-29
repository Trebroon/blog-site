// imports 
const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const passport = require('passport');

// User model 
const User = require('./models/user');

// passport config
require('./config/passport')(passport);

// DB config
const connectDB = require('./config/db');

// session
const session = require('express-session');
const MongoStore = require('connect-mongo');

// routes
const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');

// dotenvs
const port = process.env.PORT || 5000;
const secret = process.env.SECRET || 'idontreallylikesimpanzees';
const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/blog-site';

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(mongoSanitize());

// connecting to db
connectDB();

// routes 
app.use('/api/users', userRoutes);
app.use('/api', blogRoutes);

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
})