import profile from '../../assets/profile.jpg'
import './Sidebar.css'


const Sidebar = ({close ,setCategory }) => {
  return (
    <div className={`sideBar ${close ? "active" : ''}`}>
        <div className="sidebar_container">
          <div className={`${close ? "icons" : 'icon'}`} onClick={() => setCategory(0)}>
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </div>
          <div className={`${close ? "icons" : 'icon'}`} onClick={() => setCategory(17)}>
          <i className="fa-solid fa-medal"></i>
            <span>Sports</span>
          </div>
          <div className={`${close ? "icons" : 'icon'}`}onClick={() => setCategory(1)}>
            <i className="fa-solid fa-subscript"></i>
            <span>Subscriptions</span>
          </div>
          <div className={`${close ? "icons" : 'icon'}`} onClick={() => setCategory(28)}>
            <i className="fa-brands fa-empire"></i>
            <span>Trending</span>
          </div>
          <div className={`${close ? "icons" : 'icon'}`} onClick={() => setCategory(22)}>
          <i className="fa-solid fa-music"></i>
            <span>Music</span>
          </div>
          <div className={`${close ? "icons" : 'icon'}`} onClick={() => setCategory(24)}>
          <i className="fa-solid fa-filter-circle-dollar"></i>
            <span>Funny</span>
          </div>
          <div className={`${close ? "icons" : 'icon'}`} onClick={() => setCategory(20)}>
            <i className="fa-solid fa-gamepad"></i>
            <span>Gaming</span>
          </div>
          <hr />
        </div>
        <div className="subscription_container">
          <h1 className={`${close ? 'active' : ''}`}>Subscriptions</h1>
          <div className={`${close ? "subscript_active" :'subscript'}`}>
            <img src={profile} alt="subscript-image" className='sub_image'/>
            <h3 className={`${close ? 'clear' : ''}`}>Net Ninja</h3>
          </div>
          <div className={`${close ? "subscript_active" :'subscript'}`}>
            <img src={profile} alt="subscript-image" className='sub_image'/>
            <h3 className={`${close ? 'clear' : ''}`}>Net Ninja</h3>
          </div>
          <div className={`${close ? "subscript_active" :'subscript'}`}>
            <img src={profile} alt="subscript-image" className='sub_image'/>
            <h3 className={`${close ? 'clear' : ''}`}>Net Ninja</h3>
          </div>
          <div className={`${close ? "subscript_active" :'subscript'}`}>
            <img src={profile} alt="subscript-image" className='sub_image'/>
            <h3 className={`${close ? 'clear' : ''}`}>Net Ninja</h3>
          </div>
          <div className={`${close ? "subscript_active" :'subscript'}`}>
            <img src={profile} alt="subscript-image" className='sub_image'/>
            <h3 className={`${close ? 'clear' : ''}`}>Net Ninja</h3>
          </div>
        <div className={`${close ? "subscript_active" :'subscript'}`}>
            <img src={profile} alt="subscript-image" className='sub_image'/>
            <h3 className={`${close ? 'clear' : ''}`}>Net Ninja</h3>
          </div>
        </div>
        <div className={`${close ? "subscript_active" :'subscript'}`}>
        <img src={profile} alt="subscript-image" className='sub_image'/>
        <h3 className={`${close ? 'clear' : ''}`}>Net Ninja</h3>
      </div>
      <div className={`${close ? "subscript_active" :'subscript'}`}>
        <img src={profile} alt="subscript-image" className='sub_image'/>
        <h3 className={`${close ? 'clear' : ''}`}>Net Ninja</h3>
      </div>
    </div>
  )
}

export default Sidebar;