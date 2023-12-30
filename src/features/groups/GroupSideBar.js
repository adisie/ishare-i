import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'

// actions
import {navigator} from '../easy-nav/navSlice'

// sub side bar
import ActiveGroupList from './group-sidebars/ActiveGroupList'
import OnlineGroupList from './group-sidebars/OnlineGroupList'


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
        {/* <ActiveGroupList /> */}
        <OnlineGroupList />
      </div>
    </div>
  )
}

export default GroupSideBar