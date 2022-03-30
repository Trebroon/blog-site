import { useState } from 'react'

// styles & icons
import './Signup.css'
import { FaUser, FaUserPlus, FaLock, FaLockOpen } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [name, setName] = useState('')
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, password2, name)
  }
  
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
      {error && <div className='error'>{error}</div>}
      {!isPending && <button className="btn"><FaUserPlus /> Sign Up</button>}
      {isPending && <button className='btn' disabled><FaUserPlus /> Signing Up...</button>}
    </form>
  )
}