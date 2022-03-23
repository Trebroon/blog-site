const User = require('../models/user');

module.exports.register = async (req, res) => {
  try {
    const { email, password, password2, name } = req.body;
    // validate password
    if(password !== password2) {
      return res.json({ error: 1, msg: 'Passwords don\'t match' });
    } else {
      res.json(200, { msg: 'hello' });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ error: error });
  }
};

module.exports.login = (req, res) => {
  res.json({ user: req.body });
};

module.exports.logout = (req, res) => {
  res.json({ logout: true });
};