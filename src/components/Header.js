import {NavLink} from 'react-router-dom'

// icons
import { FiSearch } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi"

// default profiles
import defautUserProfile from '../assets/images/defaults/profiles/male-profile-3.jpg'

const Header = () => {
  return (
    <header>
      <div className='sub-container header'>
        <div className='site-logo'>
          <div className='toggler-btn-container'>
            <button className='left-sidebar-toggler'><GiHamburgerMenu /></button>
          </div>
          <NavLink to={'/'} className={'logo-link'}>ishare</NavLink>
        </div>
        <div className="header-content">
          <div className="search-bar-container">
            <input type="text" placeholder='search'/>
            <button><FiSearch /></button>
          </div>
          {
            !true
            ?
          <div className="header-user-profile-container">
            <NavLink to={'/profile'} className={'header-user-profile-link'}>
              <img src={defautUserProfile} alt="user profile"/>
            </NavLink>
          </div>
            :
          <div className='header-login-container'>
            <NavLink to={'/login'} className={'header-login-link'}>Login</NavLink>
          </div>
          }
        </div>
      </div>
    </header>
  )
}

export default Header
