import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

// styles & icons
import './Navbar.css'
import { FaUserPlus, FaUserCheck, FaPencilAlt } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'

export default function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    axios.get('api/users/logout').then(navigate('/'))
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1><Link to='/'>Blog-Site</Link></h1>
        <Link className='btn' to='/createBlog'><FaPencilAlt /> Write new post</Link>
        <Link className='btn' to='/login'><FaUserCheck /> Log In</Link>
        <Link className='btn' to='/signup'><FaUserPlus /> Sign Up</Link>
        <button className='btn' onClick={handleLogout}><MdLogout /> Log Out</button>
      </div>
    </nav>
  )
}