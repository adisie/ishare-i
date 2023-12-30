import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'

// actions
import {navigator} from '../../features/easy-nav/navSlice'

// default group image
import defaultGroupProfile from '../../assets/images/defaults/profiles/group-profile-avater-2.jpg'

// icons
import { GoArrowLeft } from "react-icons/go"
import { FiSearch } from "react-icons/fi"
import { FaCirclePlus } from "react-icons/fa6"

const GroupSideBar = () => {

  // hooks
  const dispatch = useDispatch()

  // navigation handler
  const backToHome = direction => {
    dispatch(navigator(direction))
  }
  return (
    <div className='group-left-sidebar'>
      <div className="sidebar-header"> 
        <NavLink to={'/'} className={'back-to-home-link'} onClick={()=>backToHome('HOME')}><GoArrowLeft /></NavLink>
        <div className='group-nav'>
          <nav>
            <ul>
              <li>
                <NavLink className={'link'}>all</NavLink>
              </li>
              <li>
                <NavLink className={'link'}>other</NavLink>
              </li>
            </ul>
          </nav>
          <div className="group-search">
            <input type="text" placeholder='serach' />
            <button><FiSearch /></button>
          </div>
          <div className='new-group-btn'>
            <button><FaCirclePlus /></button>
          </div>
        </div>
      </div>
      <div className="group-list">
        <ul>
          <li>
            <div className='group-name-profile'>
              <img src={defaultGroupProfile} alt=" group profile" style={{width: '24px',height: '24px'}}/>
              <span>group</span>
            </div>
            <div className='group-auth-btn'>
              <button>leave</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default GroupSideBar
