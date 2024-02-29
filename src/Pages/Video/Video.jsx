import PlayContainer from '../../Components/PlayContainer/PlayContainer'
import VideoView from '../../Components/VideoView/VideoView'
import './Video.css'
import { useParams } from 'react-router-dom'

const Video = ({valueChange}) => {

const {videoId , catergoryId} = useParams()
  return (
    <div className="videoConainer">
      <VideoView videoId={videoId} valueChange={valueChange}/>
      <PlayContainer catergoryId={catergoryId} valueChange={valueChange}/>
    </div>
    
  )
}

export default Video