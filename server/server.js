const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

const session = require('express-session');
const MongoStore = require('connect-mongo');

// routes
const blogRoutes = require('./routes/blogRoutes')

// dotenvs
const port = process.env.PORT || 5000
const secret = process.env.SECRET || 'idontreallylikesimpanzees';
const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/blog-site'

// session
// mongo store config
const store = MongoStore.create({
  mongoUrl: dbURL,
  touchAfter: 24 * 60 * 60,
  crypto: {
    secret,
  },
});
// mongo store on error
store.on('error', function(e){
  console.log('SESSION STORE ERROR', e);
});
// session config
const sessionConfig = {
  store,
  name: 'link',
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

const app = express();
app.use(session(sessionConfig));
app.use(cors());
app.use(express.json());
app.use(mongoSanitize());

connectDB();

app.use('/api', blogRoutes)


app.listen(port, () => {
  console.log(`Serving on port ${port}`);
})