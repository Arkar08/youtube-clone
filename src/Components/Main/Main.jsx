import moment from 'moment'
import './Main.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Main = ({close , data ,valueChange}) => {
  return (
    <div className={`${close ? "main_close" :"main"}`}>
        {
            data && data.map((dat) =>{
                return (
                    <Link to= {`/video/${dat.snippet.categoryId}/${dat.id}`} className="card" key={dat.id}>
                        <img src={dat.snippet.thumbnails.medium.url} alt="main_vd" className='video'/>
                        <div className='vd-profile'>
                            <img src={dat.snippet.thumbnails.default.url}alt="" className='vd_profile'/>
                            <div className='viewer'>
                                <h2 className='title'>{dat.snippet.localized.title}</h2>
                                <p>{dat.snippet.channelTitle}</p>
                                <p><span>{valueChange(dat.statistics.viewCount)}</span><span>.</span><span className='moment'>{moment(dat.snippet.publishedAt).fromNow()}</span></p>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Main;