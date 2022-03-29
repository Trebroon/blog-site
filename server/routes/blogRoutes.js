const express = require('express');
const passport = require('passport');
const { getBlog, getBlogs, createBlog, updateBlog, deleteBlog } = require('../controllers/blogControllers');

const router = express.Router();

router
  .route('/')
  .get(getBlogs)
  .post(passport.authenticate('jwt', { session: false }), createBlog);

router
  .route('/blog/:id')
  .get(getBlog)
  .put(passport.authenticate('jwt', { session: false }), updateBlog)
  .delete(passport.authenticate('jwt', { session: false }), deleteBlog);

module.exports = router;