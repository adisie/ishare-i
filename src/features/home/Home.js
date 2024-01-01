import {Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux'

// actions
import {selectMainDirection} from '../easy-nav/easyNavSlice'

// sub pages
import HomeSideBar from "./HomeSideBar"
import GroupsSideBar from '../groups/GroupsSideBar'

const Home = () => {
  // states
  const MAIN_DIRECTION = useSelector(selectMainDirection)
  return (
    <div className='flex-grow flex relative'>
      {
        MAIN_DIRECTION === 'HOME'
        ?
        <HomeSideBar />
        :
        MAIN_DIRECTION === 'GROUPS'
        ?
        <GroupsSideBar />
        :
        <></>

      }
        <Outlet />
    </div>
  )
}

export default Home