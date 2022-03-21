import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

// styles & icons
import './EditBlog.css'
import { FaPencilAlt } from 'react-icons/fa'

export default function EditBlog() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [isPending, setIsPending] = useState(false)
  // const [blogImage, setBlogImage] = useState(null)
  // const [blogImageError, setBlogImageError] = useState(null)

  useEffect(() => {
    axios.get(`/api/blog/${id}`).then((res) => {
      setTitle(res.data.title)
      setText(res.data.text)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsPending(true)
    axios.put(`/api/blog/${id}`, {
      title,
      text
    }).then(() => {
      setIsPending(false)
      navigate(`/blog/${id}`)
    })
    
  }

  return (
    <form className='form blog-form' onSubmit={handleSubmit}>
      <h2><FaPencilAlt /> Edit your blog</h2>
      <label>
        <span>Title of your blog:</span>
        <input type="text" name="title" required autoFocus onChange={(e) => setTitle(e.target.value)} value={title} />
      </label>
      <label>
        <span>Blog text:</span>
        <textarea name="text" required onChange={(e) => setText(e.target.value)} value={text}></textarea>
      </label>
      {/* <label>
        <span>Add a picture to your blog:</span>
        <input type="file" name="image" required onChange={handleFileChange} />
        {blogImageError && <div className='error'>{blogImageError}</div>}
      </label> */}
      {!isPending && <button className='btn'>Submit</button>}
      {isPending && <button className='btn' disabled>Submiting...</button>}
    </form>
  )
}