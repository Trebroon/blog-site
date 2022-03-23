const express = require('express');
const { register, login, logout } = require('../controllers/userControllers');

const router = express.Router();

router
  .route('/register')
  .post(register);

router
  .route('/login')
  .post(login);

router.get('/logout', logout);

module.exports = router;