import {Outlet} from 'react-router-dom'

// sub pages
import HomeSideBar from "./HomeSideBar"
import GroupsSideBar from '../groups/GroupsSideBar'

const Home = () => {
  return (
    <div className='flex-grow flex relative'>
        {/* <HomeSideBar /> */}
        <GroupsSideBar />
        <Outlet />
    </div>
  )
}

export default Home