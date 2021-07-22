import React from 'react'
import { BASE_URL } from '../../constants/urls'
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { goToMusicDetail } from '../../routes/coordinator'


const FeedPage = () => {
  useProtectedPage()
  const history = useHistory()

  const musics = useRequestData([], `${BASE_URL}/music/all`)
  console.log(musics)

  const musicCards = musics.map((music) => {
    return (
      <div key={music.title}>
        <p>{music.title}</p>
      </div>
    )
    
  })

  return (
    <div>
        Sou o FeedPage

        <div onClick={() => goToMusicDetail(history)}> {musicCards} </div>
    </div>
  )
}

export default FeedPage;