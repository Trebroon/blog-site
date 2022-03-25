import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// styles & icons
import './Login.css'
import { FaUser, FaUserCheck, FaLock } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsPending(true)
    
    axios.post('/api/users/login', {
      email,
      password,
    }).then((response) => {
      setIsPending(false)
      console.log(response)
      navigate('/')
    })
  }
  
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2><FaUser /> Log in</h2>
      <label>
        <span><MdOutlineAlternateEmail /> Email:</span>
        <input type="email" name="email" required autoFocus onChange={(e) => setEmail(e.target.value)} value={email} />
      </label>
      <label>
        <span><FaLock /> Password</span>
        <input type="password" name="password" required onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>
      {error && <div className='error'>Wrong Username or Password</div>}
      {!isPending && <button className="btn"><FaUserCheck /> Log in</button>}
      {isPending && <button className="btn" disabled><FaUserCheck /> Log in</button>}
    </form>
  )
}