import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useAuthContext } from "../hooks/useAuthContext"

export const useLogout = () => {
  const navigate = useNavigate()
  const [isCanceled, setIsCanceled] = useState(false)
  const [error, setError] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const logout = () => {
    setError(false)
    setIsPending(true)

    axios.get('/api/users/logout')
    .then(() => {
      dispatch({ type: 'LOGOUT' })
      navigate('/')
      
      if(!isCanceled) {
        setIsPending(false)
        setError(null)
      }
    })
    .catch((err) => {
      if (!isCanceled) {
        setError(true)
        setIsPending(false)
      }
    })
  }
  useEffect(() => {
    return () => setIsCanceled(true)
  }, [])
  
  return { logout, error, isPending }
}