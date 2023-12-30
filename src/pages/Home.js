import {Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'

// actions
import {selectMainDirection} from '../features/easy-nav/navSlice'

// side bars
import HomeSideBar from '../components/sidebars/HomeSideBar' 
import GroupSideBar from '../components/sidebars/GroupSideBar'

const Home = () => {

  // states
  const MAIN_DIRECTION = useSelector(selectMainDirection)

  return (
    <div className='home-container'>
      <div className="sub-container home">
        {
          MAIN_DIRECTION === 'HOME'
          ?
          <HomeSideBar />
          :
          MAIN_DIRECTION === 'GROUPS'
          ?
          <GroupSideBar />
          :
          <></>
        }
        <div className="home-content-container">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home
