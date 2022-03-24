import { useState, useEffect } from 'react'
import axios from 'axios'

// styles & components
import './Dashboard.css'
import BlogCard from '../../components/BlogCard'

export default function Dashboard() {
  const [blogs, setBlogs] = useState([])
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    setIsPending(true)
    axios.get('/api').then((response) => {
      setBlogs(response.data)
    })
    setIsPending(false)
  }, [])

  return (
    <div className="dashboard">
      <h2>Most recent articles</h2>
      {isPending && <div>Loading articles...</div>}
      {!isPending && (
        <div className='blogs-grid'>
        {blogs.map((blog) => <BlogCard blog={blog} key={blog._id} />)}
        </div>
      )}
    </div>
  )
}