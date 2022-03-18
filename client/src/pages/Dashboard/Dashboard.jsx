import { useState, useEffect } from 'react'
import axios from 'axios'

// styles & components
import './Dashboard.css'
import BlogCard from '../../components/BlogCard'

export default function Dashboard() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api').then((response) => {
      setBlogs(response.data)
    })
  }, [])

  return (
    <div className="dashboard">
      <h2>Most recent articles</h2>
      <div className='blogs-grid'>
        {blogs.map((blog) => <BlogCard blog={blog} key={blog._id} />)}
      </div>
    </div>
  )
}