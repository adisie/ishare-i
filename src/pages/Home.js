import {Outlet,NavLink} from 'react-router-dom'

// icons
import { IoMdHome } from "react-icons/io"
import { MdSupervisorAccount } from "react-icons/md"
import { GrChannel } from "react-icons/gr"
import { LuArrowDownRight } from "react-icons/lu"

const Home = () => {
  

  //
  return (
    <div className='home-container'>
      <div className="sub-container home">
        <div className="home-left-sidebar-con">
          <nav className='home-left-nav'>
            <ul>
              <li>
                <IoMdHome className='icon'/>
                <NavLink to={'/'} className={'link'}>Home</NavLink>
              </li>
              <li>
                <MdSupervisorAccount className='icon'/>
                <NavLink to={'/groups'} className={'link'}>Groups</NavLink>
              </li>
              <li>
                <GrChannel className='icon'/>
                <NavLink to={'/channels'} className={'link'}>Channels</NavLink>
              </li>
              <li>
                <LuArrowDownRight className='icon'/>
                <NavLink to={'/login'} className={'link'}>Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="home-content-container">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home
