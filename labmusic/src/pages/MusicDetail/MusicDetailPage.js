import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage';


const MusicDetailPage = () => {
  useProtectedPage()

  return (
    <div>
        Sou o MusicDetailPage
    </div>
  )
}

export default MusicDetailPage;