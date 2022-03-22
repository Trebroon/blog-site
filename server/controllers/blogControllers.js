const Blog = require('../models/blog')

module.exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports.createBlog = async (req, res) => {
  try {
    const blog = req.body;
    const newBlog = new Blog(blog);
    await newBlog.save();
    res.json(blog);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, { ...req.body });
    await blog.save();
    res.json(blog);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.json({ id: id })
  } catch (error) {
    console.log(error.message)
  }
}