import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// styles & icons 
import './CreateBlog.css'
import { FaPencilAlt } from 'react-icons/fa'

export default function CreateBlog() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsPending(true)
    axios.post('/api', {
      title,
      text,
    }).then(() => {
      setIsPending(false)
      navigate('/')
    })
  }
  
  return (
    <form className='form blog-form' onSubmit={handleSubmit}>
      <h2><FaPencilAlt /> Write your new blog</h2>
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