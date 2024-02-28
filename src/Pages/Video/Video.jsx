import PlayContainer from '../../Components/PlayContainer/PlayContainer'
import VideoView from '../../Components/VideoView/VideoView'
import './Video.css'
import { useParams } from 'react-router-dom'

const Video = () => {

const {videoId , categoryId} = useParams()

  return (
    <div className="videoConainer">
      <VideoView videoId={videoId}/>
      <PlayContainer categoryId={categoryId}/>
    </div>
    
  )
}

export default Video