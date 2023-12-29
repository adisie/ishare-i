import {NavLink} from 'react-router-dom'

import { FiSearch } from "react-icons/fi"

const Header = () => {
  return (
    <header>
      <div className='sub-container header'>
        <div className='site-logo'>
          <NavLink to={'/'} className={'logo-link'}>ishare</NavLink>
        </div>
        <div className="header-content">
          <div className="search-bar-container">
            <input type="text" placeholder='search'/>
            <button><FiSearch /></button>
          </div>
          <div className='header-login-container'>
            <NavLink to={'/login'} className={'header-login-link'}>Login</NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
