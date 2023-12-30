
import {NavLink} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'


// actions
import {navigator} from '../easy-nav/navSlice'
import {selectGroupsDirection,groupsNaviator} from './groupsSlice'

// sub side bar
import ActiveGroupList from './group-sidebars/ActiveGroupList'
import OnlineGroupList from './group-sidebars/OnlineGroupList'
import CreateNewGroup from './group-sidebars/CreateNewGroup'


// icons
import { GoArrowLeft } from "react-icons/go"
import { FiSearch } from "react-icons/fi"
import { FaCirclePlus } from "react-icons/fa6"


const GroupSideBar = () => {
  // states 
  const GROUPS_DIRECTION = useSelector(selectGroupsDirection)
  // hooks
  const dispatch = useDispatch()

  // navigation handler
  const backToHome = () => {
    dispatch(navigator('HOME'))
    dispatch(groupsNaviator('ACTIVE'))
  }

  // active groups
  const activeGroups = () => {
    dispatch(groupsNaviator('ACTIVE'))
  }

  // online groups
  const onlineGroups = () => {
    dispatch(groupsNaviator('ONLINE'))
  }

  // create new group
  const createNewGroup = () => {
    dispatch(groupsNaviator('NEW'))
  }
  return (
    <div className='group-left-sidebar'>
      <div className="sidebar-header"> 
        <NavLink to={'/'} className={'back-to-home-link'} onClick={backToHome}><GoArrowLeft /></NavLink>
        <div className='group-nav'>
          <nav>
            <ul>
              <li>
                <NavLink className={'link'} onClick={activeGroups}>All</NavLink>
              </li>
              <li>
                <NavLink className={'link'} onClick={onlineGroups}>Online</NavLink>
              </li>
            </ul>
          </nav>
          <div className="group-search">
            <input type="text" placeholder='serach' />
            <button><FiSearch /></button>
          </div>
          <div className='new-group-btn'>
            <button onClick={createNewGroup}><FaCirclePlus /></button>
          </div>
        </div>
      </div>
      <div className="group-list">
        {
          GROUPS_DIRECTION === 'ACTIVE'
          ?
          <ActiveGroupList />
          :
          GROUPS_DIRECTION === 'ONLINE' 
          ?
          <OnlineGroupList />
          :
          GROUPS_DIRECTION === 'NEW'
          ?
          <CreateNewGroup />
          : 
          <></>
        }
      </div>
    </div>
  )
}

export default GroupSideBar