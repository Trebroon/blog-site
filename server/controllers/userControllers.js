const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/user');

// route /api/users/register
// registering new user
module.exports.register = async (req, res) => {
  try {
    let newUser = {};
    const { email, password, password2, name } = req.body;
    // password validation
    // must be longer then 6 
    if(password.length < 6) {
      return res.json({ error: 1, msg: 'Password must be longer than 6 characters' })
    }
    // password and password 2 must match
    if(password !== password2) {
      return res.json({ error: 1, msg: 'Passwords don\'t match' });
    }

    // check if user already exists, else create new user
    const user = await User.findOne({ email: email });
    if(user) {
      return res.json({ error: 1, msg: 'User with this email already exists.'});
    } else {
      newUser = new User({ email, password, name });
    };

    // crypting user password
    bcrypt.genSalt(10, (error, salt) => {
      bcrypt.hash(newUser.password, salt, (error, hash) => {
        newUser.password = hash;
      });
    });

    // saving new user
    const regUser = await newUser.save();
    res.json(regUser);

  } catch (error) {
    console.log(error.message);
    res.json({ error: error });
  }
};

// route /api/users/login
// login user
module.exports.login = (req, res, next) => {
  passport.authenticate('local')(req, res, next);
  res.json({ msg: 'Logged in '});
};

module.exports.logout = (req, res) => {
  res.json({ logout: true });
};