import { useNavigate } from 'react-router-dom'

// styles
import './BlogCard.css'

export default function BlogCard({ blog }) {
  const navigate = useNavigate()
  
  return (
    <div className='blog-card'>
      <h3>{blog.title}</h3>
      <p>{blog.text.substring(0, 75)}...</p>
      <button className='btn' onClick={() => navigate(`/blog/${blog._id}`)}>Read more</button>
    </div>
  )
}