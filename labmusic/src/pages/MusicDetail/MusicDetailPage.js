import React from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';


const MusicDetailPage = () => {
  useProtectedPage()
  const params = useParams()

  const music = useRequestData({}, `${BASE_URL}/music/${params.id}`)
  console.log(music)
 

  return (
    <div>

      {music ?
        <div key = {music.music.id}>
          {music.music.title}
          {music.music.file_string}
          {music.music.album_id}
          {music.albumMusic.name_album}
          
        </div>
        :
        <h1>Carregando</h1>
      }       
        
    </div>
  )
}

export default MusicDetailPage;



  // const genresResult = music.genreMusicResult[0]
  // console.log(genresResult)

  // const genre = music.genreMusicResult.map ((genre) => {
  //   return (
  //     <div key={genre.genre_id}>
  //       {genre.genre_id}

  //     </div>
  //   )
  // })

  {/* /* {genre ?
      <div>
        {genre}
      </div>
      :
      <h1>Carregando</h1>
      } */} 