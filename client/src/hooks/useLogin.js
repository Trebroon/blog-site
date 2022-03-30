import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from './useAuthContext'
import axios from 'axios'

export const useLogin = () => {
  const navigate = useNavigate()
  const [isCanceled, setIsCanceled] = useState(false)
  const [error, setError] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const login = (email, password) => {
    setError(false)
    setIsPending(true)

    axios.post('/api/users/login', {
      email,
      password,
    })
    .then((response) => {
      dispatch({ type: 'LOGIN', payload: response.data })
      navigate('/')

      if (!isCanceled) {
        setIsPending(false)
        setError(false)
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

  return { login, isPending, error }
}