import { useLogout } from "../hooks/useLogout"

// styles & icons
import { MdLogout } from 'react-icons/md'

export default function LogoutBtn() {
  const { logout, isPending, error } = useLogout()

    const handleLogout = () => {
      logout()
  }

  return (
    <button className='btn' onClick={handleLogout}><MdLogout /> Log Out</button>
  )
}