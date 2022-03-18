const express = require('express');
const { getBlog, getBlogs, createBlog, updateBlog, deleteBlog } = require('../controllers/blogControllers');

const router = express.Router();

router
  .route('/')
  .get(getBlogs)
  .post(createBlog);

router
  .route('/blog/:id')
  .get(getBlog)
  .put(updateBlog)
  .delete(deleteBlog);

module.exports = router;