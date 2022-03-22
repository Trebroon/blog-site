const express = require('express');
const passport = require('passport');
const { register, login, logout } = require('../controllers/userControllers');

const router = express.Router();

router
  .route('/register')
  .post(register);

router
  .route('/login')
  .post(passport.authenticate('local'), login);

router.get('/logout', logout);

module.exports = router;