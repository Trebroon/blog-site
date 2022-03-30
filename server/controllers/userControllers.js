const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

const User = require('../models/user');

const signToken = userID => {
  return JWT.sign({
    iss: 'blog-site',
    sub: userID
  }, process.env.JWT_SECRET, { expiresIn: '3h'});
}

// route /api/users/register
// registering new user
module.exports.register = async (req, res) => {
  try {
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
      const newUser = new User({ email, password, name });
      // crypting user password
      bcrypt.genSalt(10, function(error, salt) {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          // hashing users password
          newUser.password = hash;
          // saving new user to database
          const regUser = newUser.save();
          res.json(regUser);
        });
      });
    };

  } catch (error) {
    console.log(error.message);
    res.json({ error: error });
  }
};

// route /api/users/login
// login user
module.exports.login = (req, res, next) => {
  if(req.isAuthenticated()) {
    const { _id, email, name } = req.user;
    const token = signToken(_id);
    res.cookie('access_token', token, { httpOnly: true, sameSite: true });
    res.json({ isAuthenticated: true, user: { name, email }});
  }}

// route /api/users/logout
// logout user
module.exports.logout = (req, res) => {
  res.clearCookie('access_token');
  res.json({ isAuthenticated: false, user: { email: '', name: '' }});
};