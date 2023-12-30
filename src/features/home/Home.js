import { useLayoutEffect } from 'react'
import {Outlet} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

// actions
import {selectMainDirection,navigator} from '../easy-nav/navSlice'

// side bars
import HomeSideBar from './HomeSideBar' 
import GroupSideBar from '../groups/GroupSideBar'

const Home = () => {
    // states
  const MAIN_DIRECTION = useSelector(selectMainDirection)

  // hooks
  const dispatch = useDispatch()

  // effects
  useLayoutEffect(()=> {
    let currentLocation = window.location.href.toString().split('/')[3]
    if(currentLocation === 'groups'){
      dispatch(navigator('GROUPS'))
    }
  })

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