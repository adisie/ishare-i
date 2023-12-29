import {Outlet} from 'react-router-dom'

// side bars
import HomeSideBar from '../components/sidebars/HomeSideBar' 
import GroupSideBar from '../components/sidebars/GroupSideBar'

const Home = () => {
  return (
    <div className='home-container'>
      <div className="sub-container home">
        {/* <HomeSideBar /> */}
        <GroupSideBar />
        <div className="home-content-container">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home
