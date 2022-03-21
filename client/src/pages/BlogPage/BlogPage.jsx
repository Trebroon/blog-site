import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

// styles
import './BlogPage.css'

export default function BlogPage() {
  const navigate = useNavigate()
  const { id } = useParams('')
  const [blog, setBlog] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blog/${id}`).then((response) => {
      setBlog(response.data)
    })
  }, [])

  const handleEdit = () => {
    navigate(`/blog/${id}/edit`)
  }

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/blog/${id}`).then(() => {
      navigate('/')
    })
  }
  
  return (
    <div className='blog-post'>
      <div className="manage-blog-btns">
        <button className='btn inline-block' onClick={handleEdit}>Edit Blog</button>
        <button className="btn btn-delete inline-block" onClick={handleDelete}>Delete Blog</button>
      </div>
      <h2>{blog.title}</h2>
      <p>{blog.text}</p>
    </div>
  )
}