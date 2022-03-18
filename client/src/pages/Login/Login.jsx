import { useState } from 'react'

// styles & icons
import './Login.css'
import { FaUser, FaUserCheck, FaLock } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
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
      <button className="btn"><FaUserCheck /> Log in</button>
    </form>
  )
}