const express = require('express');
const { register, login, logout } = require('../controllers/userControllers');
const passport = require('passport');

const router = express.Router();

router
  .route('/register')
  .post(register);

router
  .route('/login')
  .post(passport.authenticate('local', { session: false }), login);

router.get('/logout', passport.authenticate('jwt', { session: false }), logout);

module.exports = router;