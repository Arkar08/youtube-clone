import './Video.css'
import vd from '../../assets/vd.jpg'
import profile from '../../assets/profile.jpg'

const Video = () => {


  return (
    <div className="video_container">
        <div className='video'>
          <img src={vd} className='images'/>
          <h2>Music Band</h2>
        <div className='vd_container'>
            <div className="vd-profile">
              <img src={profile} alt=""/>
              <div className='vd_title'>
                <p>Music</p>
                <span>39k<span>views</span></span>
              </div>
              <button>Scribe</button>
            </div>
            <div className="vd_icon">
              <div className="like">
                <button className='liked'><i className="fa-regular fa-thumbs-up"></i>
                  <span>245</span>
                </button>
                <button className='thum'><i className="fa-regular fa-thumbs-down"></i></button>
              </div>
              <button className='vd-share'><i className="fa-solid fa-share"></i>
              <span>share</span></button>
              <button className='vd-clip'><i className="fa-solid fa-scissors"></i>
              <span>Clip</span></button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Video