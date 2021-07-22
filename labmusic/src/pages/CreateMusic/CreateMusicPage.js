import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage';


const CreateMusicPage = () => {
  useProtectedPage()

  return (
    <div>
        Sou o CreateMusicPage
    </div>
  )
}

export default CreateMusicPage;