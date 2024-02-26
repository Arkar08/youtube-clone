import './Navbar.css'
import profile from '../../assets/profile.jpg'
import { Link } from 'react-router-dom'
const Navbar = ({handleClick}) => {
  return (
    <nav className='navbar'>
        <div className="menu">
            <i className="fa-solid fa-bars" onClick={handleClick}></i>
            <Link to = '/'className='logo'>
                <i className="fa-brands fa-youtube"></i>
                Youtube
            </Link>
        </div>
        <form className="search">
            <input type="text" placeholder='Search...'/>
            <i className="fa-solid fa-magnifying-glass"></i>
        </form>
        <div className="profile">
            <i className="fa-solid fa-video-slash"></i>
            <div className="bell_container">
                    <i className="fa-solid fa-bell"></i>
                    <span className='bell'>10</span>
            </div>
            <img src={profile} alt="profile" className='profile_image' />
        </div>
    </nav>
  )
}

export default Navbar;