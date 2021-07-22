import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToRecipesList } from '../routes/coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToFeed(history)
    }
  }, [history])
}

export default useUnprotectedPage
