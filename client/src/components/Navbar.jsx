import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

// styles & icons & components
import './Navbar.css'
import { FaUserPlus, FaUserCheck, FaPencilAlt } from 'react-icons/fa'
import LogoutBtn from './LogoutBtn'

export default function Navbar() {
  const { user } = useAuthContext()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1><Link to='/'>Blog-Site</Link></h1>
        {user && (
          <>
            <Link className='btn' to='/createBlog'><FaPencilAlt /> Write new post</Link>
            <LogoutBtn />
          </>
        )}
        {!user && (
          <>
            <Link className='btn' to='/login'><FaUserCheck /> Log In</Link>
            <Link className='btn' to='/signup'><FaUserPlus /> Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  )
}