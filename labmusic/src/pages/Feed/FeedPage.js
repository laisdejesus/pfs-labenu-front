import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage';


const FeedPage = () => {
  useProtectedPage()

  return (
    <div>
        Sou o FeedPage
    </div>
  )
}

export default FeedPage;