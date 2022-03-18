import { Link } from 'react-router-dom'

// styles & icons
import './Navbar.css'
import { FaUserPlus, FaUserCheck, FaPencilAlt } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1><Link to='/'>Blog-Site</Link></h1>
        <Link className='btn' to='/createBlog'><FaPencilAlt /> Write new post</Link>
        <Link className='btn' to='/login'><FaUserCheck /> Log In</Link>
        <Link className='btn' to='/signup'><FaUserPlus /> Sign Up</Link>
        <button className='btn'><MdLogout /> Log Out</button>
      </div>
    </nav>
  )
}