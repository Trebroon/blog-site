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
  // const [blogImage, setBlogImage] = useState(null)
  // const [blogImageError, setBlogImageError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsPending(true)
    await axios.post('http://localhost:5000/api', {
      title,
      text,
    })
    setIsPending(false)
    navigate('/')
  }

  // const handleFileChange = (e) => {
  //   setBlogImage(null)
  //   let selected = e.target.files[0]

  //   if(!selected) {
  //     setBlogImageError('Please select a file')
  //     return
  //   }
  //   if(!selected.type.includes('image')) {
  //     setBlogImageError('Selected file must be an image')
  //     return
  //   }
  //   if(selected.size > 2500000) {
  //     setBlogImageError('Image file size must be less than 2.5mb')
  //     return
  //   }
    
  //   setBlogImageError(null)
  //   setBlogImage(selected)
  // }
  
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