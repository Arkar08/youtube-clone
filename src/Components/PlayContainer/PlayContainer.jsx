import "./PlayContainer.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const PlayContainer = ({catergoryId , valueChange}) => {

  const key = "AIzaSyB0SPs6zeFq120ysmXyxiAQAkGtRCC6tPE";

  const db = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&videoCategoryId=${catergoryId}&key=${key}`

  const [playContainer , setPlayContainer] = useState([]);
  const getContainer = async() =>{
    const res = await fetch(db);
    const play = await res.json();
    console.log(play.items)
    setPlayContainer(play.items)
  }

  useEffect(()=>{
    getContainer()
  })
  return (
    <div className="play">
       {
        playContainer.map((play , index) =>{
            return (
            <Link to={`/video/${play.snippet.categoryId}/${play.id}`} className="box-card" key={index}>
              <div className="left">
                    <img src={play.snippet.thumbnails.medium.url} alt="" className="video_auto" />
              </div>
              <div className="right">
                <h2>{play.snippet.localized.title}</h2>
                <div className="day">
                <p className="value">
                  {valueChange(play.statistics.viewCount)} 
                  <span className="day"></span>
                </p>
              </div>
              </div>
            </Link>
            )
        })
      }

    </div>
  );
};

export default PlayContainer;
