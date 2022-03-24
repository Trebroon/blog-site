import { useNavigate } from "react-router-dom"
import axios from "axios"

// styles & icons
import { MdLogout } from 'react-icons/md'

export default function LogoutBtn() {
  const navigate = useNavigate()

    const handleLogout = () => {
      axios.get('/api/users/logout').then((response) => {
        console.log(response.data)
        navigate('/')
      })
  }

  return (
    <button className='btn' onClick={handleLogout}><MdLogout /> Log Out</button>
  )
}