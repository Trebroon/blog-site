import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useSignup = () => {
  const navigate = useNavigate()
  const [isCanceled, setIsCanceled] = useState(false)
  const [error, setError] = useState(false)
  const [isPending, setIsPending] = useState(false)

  const signup = (email, password, password2, name) => {
    setError(false)
    setIsPending(true)

    axios.post('/api/users/register', {
      email,
      password,
      password2,
      name,
    }).then((response) => {
      if (response.data.error) {
        setIsPending(false)
        return setError(response.data.msg)
      }
      setIsPending(false)
      navigate('/')

      if(!isCanceled) {
        setError(false)
        setIsPending(false)
      }
    })
    .catch((err) => {
      if(!isCanceled) {
        setError(true)
        setIsPending(false)
      }
    })
  }

  useEffect(() => {
    return () => setIsCanceled(true)
  }, [])

  return { signup, error, isPending }
}