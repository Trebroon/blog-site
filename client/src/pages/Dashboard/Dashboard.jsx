import { useState, useEffect } from 'react'
import axios from 'axios'

// styles
import './Dashboard.css'

export default function Dashboard() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api').then((response) => {
      setBlogs(response.data)
    })
  }, [])

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.text}</p>
          </div>
        )
      })}
    </div>
  )
}