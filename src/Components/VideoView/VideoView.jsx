import profile from "../../assets/profile.jpg";
import "./VideoView.css";
const VideoView = ({ videoId }) => {
  return (
    <>
      <div className="video_container">
        <div className="video">
          <iframe
            width="853"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="images"
          ></iframe>
          <h2>Music Band</h2>
          <div className="vd_container">
            <div className="vd-profile">
              <img src={profile} alt="" />
              <div className="vd_title">
                <p>Music</p>
                <span>
                  39k<span>views</span>
                </span>
              </div>
              <button>Scribe</button>
            </div>
            <div className="vd_icon">
              <div className="like">
                <button className="liked">
                  <i className="fa-regular fa-thumbs-up"></i>
                  <span>245</span>
                </button>
                <button className="thum">
                  <i className="fa-regular fa-thumbs-down"></i>
                </button>
              </div>
              <button className="vd-share">
                <i className="fa-solid fa-share"></i>
                <span>share</span>
              </button>
              <button className="vd-clip">
                <i className="fa-solid fa-scissors"></i>
                <span>Clip</span>
              </button>
            </div>
          </div>
          <div className="description">
            <p><span>253Kviews</span><span>15 days ago</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis vitae corporis ex quasi, aliquid tempora delectus eaque illum sed similique cupiditate, esse, ullam et dolorum eveniet officiis dolore odit aliquam?</p>
          </div>
          <div className="comment-container">
            <h2>Comments</h2>
            <div className="comment">
              <div className="comment-card">
                <img src={profile} alt="" className="img"/>
                <div className="user">
                    <p className="user_id">user id <span className="user_day">23days</span></p>
                    <p className="user_comment">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="fa">
                    <i className="fa-regular fa-thumbs-up"><span>23</span></i>
                    <i className="fa-regular fa-thumbs-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoView;
