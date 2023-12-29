import {NavLink} from 'react-router-dom'

// icons
import { IoMdHome } from "react-icons/io"
import { MdSupervisorAccount } from "react-icons/md"
import { GrChannel } from "react-icons/gr"
import { LuArrowDownRight } from "react-icons/lu"

const HomeSideBar = () => {

    
  // active link style
  const activeLinkStyle = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }

  return (
    <div className="home-left-sidebar-con">
        <nav className='home-left-nav'>
        <ul>
            <li>
            <IoMdHome className='icon'/>
            <NavLink to={'/'} className={'link'} style={activeLinkStyle}>Home</NavLink>
            </li>
            <li>
            <MdSupervisorAccount className='icon'/>
            <NavLink to={'/groups'} className={'link'} style={activeLinkStyle}>Groups</NavLink>
            </li>
            <li>
            <GrChannel className='icon'/>
            <NavLink to={'/channels'} className={'link'} style={activeLinkStyle}>Channels</NavLink>
            </li>
            <li>
            <LuArrowDownRight className='icon'/>
            <NavLink to={'/login'} className={'link'} style={activeLinkStyle}>Login</NavLink>
            </li>
        </ul>
        </nav>
    </div>
  )
}

export default HomeSideBar