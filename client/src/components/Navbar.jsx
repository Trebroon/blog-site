import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

// styles & icons & components
import './Navbar.css'
import { FaUserPlus, FaUserCheck, FaPencilAlt } from 'react-icons/fa'
import LogoutBtn from './LogoutBtn'

export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1><Link to='/'>Blog-Site</Link></h1>
        <Link className='btn' to='/createBlog'><FaPencilAlt /> Write new post</Link>
        <Link className='btn' to='/login'><FaUserCheck /> Log In</Link>
        <Link className='btn' to='/signup'><FaUserPlus /> Sign Up</Link>
        <LogoutBtn />
      </div>
    </nav>
  )
}