import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

// styles
import './BlogPage.css'

export default function BlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blog/${id}`).then((response) => {
      setBlog(response.data)
    })
  }, [])
  
  return (
    <div className='blog-post'>
      <h2>{blog.title}</h2>
      <p>{blog.text}</p>
    </div>
  )
}