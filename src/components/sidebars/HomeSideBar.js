import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'

// actions
import {navigator} from '../../features/easy-nav/navSlice'

// icons
import { IoMdHome } from "react-icons/io"
import { MdSupervisorAccount } from "react-icons/md"
import { GrChannel } from "react-icons/gr"
import { LuArrowDownRight } from "react-icons/lu"

const HomeSideBar = () => {

    // hooks
    const dispatch = useDispatch()

  // active link style
  const activeLinkStyle = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }

  const navigationHandler = (direction) => {
    dispatch(navigator(direction))
  }

  return (
    <div className="home-left-sidebar-con">
        <nav className='home-left-nav'>
        <ul>
            <li>
            <IoMdHome className='icon'/>
            <NavLink to={'/'} className={'link'} style={activeLinkStyle} onClick={()=>navigationHandler('HOME')}>Home</NavLink>
            </li>
            <li>
            <MdSupervisorAccount className='icon'/>
            <NavLink to={'/groups'} className={'link'} style={activeLinkStyle} onClick={()=>navigationHandler('GROUPS')}>Groups</NavLink>
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