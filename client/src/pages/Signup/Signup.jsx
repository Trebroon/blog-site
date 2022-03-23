import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// styles & icons
import './Signup.css'
import { FaUser, FaUserPlus, FaLock, FaLockOpen } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'

export default function Signup() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState(null)
  // const [profilePicture, setProfilePicture] = useState(null)
  // const [profilePictureError, setProfilePictureError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('/api/users/register', {
      email,
      password,
      password2,
      name,
    }).then((response) => {
      if (response.data.error) {
        return (
          setError(response.data.msg)
        )
      }
      navigate('/')
    })
  }

  // const handleFileChange = (e) => {
  //   setProfilePicture(null)
  //   let selected = e.target.files[0]

  //   if(!selected) {
  //     setProfilePictureError('Please select a file')
  //     return
  //   }
  //   if(!selected.type.includes('image')) {
  //     setProfilePictureError('Selected file must be an image')
  //     return
  //   }
  //   if(selected.size > 2500000) {
  //     setProfilePictureError('Image file size must be less than 2.5mb')
  //     return
  //   }
    
  //   setProfilePictureError(null)
  //   setProfilePicture(selected)
  // }
  
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2><FaUser /> Create an account</h2>
      <label>
        <span><MdOutlineAlternateEmail /> Email:</span>
        <input type="email" name="email" required autoFocus onChange={(e) => setEmail(e.target.value)} value={email} />
      </label>
      <label>
        <span><FaLockOpen /> Password:</span>
        <input type="password" name="password" required onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>
      <label>
        <span><FaLock /> Confirm password:</span>
        <input type="password" name="confirm-password" required onChange={(e) => setPassword2(e.target.value)} value={password2} />
      </label>
      <label>
        <span><FaUser /> Username:</span>
        <input type="text" name='name' required onChange={(e) => setName(e.target.value)} value={name} />
      </label>
      {/* <label>
        <span>Profile picture:</span>
        <input type="file" name="profile-picture" required onChange={handleFileChange} />
        {profilePictureError && <div className='error'>{profilePictureError}</div>}
      </label> */}
      {error && <div className='error'>{error}</div>}
      <button className="btn"><FaUserPlus /> Sign Up</button>
    </form>
  )
}