const User = require('../models/user');

module.exports.register = async (req, res) => {
  console.log(req.body);
  res.json({ register: true });
};

module.exports.login = async (req, res) => {
  console.log(req.body);
  res.json({ login: true });
};

module.exports.logout = (req, res) => {
  console.log('logged out!')
  res.json({ logout: true });
};