import { useState } from "react"

import { NavLink } from "react-router-dom"

// icons
import { FiArrowUpLeft } from "react-icons/fi"

// sub nav
import AllGroups from "./sub-nav/AllGroups"
import MyGroups from "./sub-nav/MyGroups"
import OnlineGroups from "./sub-nav/OnlineGroups"

const GroupsNav = () => {

  // states
  const [direction,setDirection] = useState('ALL')

  // show side bar
  const hideGroupSideBar = () => {
    const sideBar = document.querySelector('#group-popup-left-side-bar')
    const groupShadow = document.querySelector('#group-drop-shadow')

    if(sideBar.classList.contains('left-0')){
      sideBar.classList.add('left-[-100vw]')
      sideBar.classList.remove('left-0')
      groupShadow.classList.add('hidden')
    }else {
      sideBar.classList.remove('left-[-100vw]')
      sideBar.classList.add('left-0')
      groupShadow.classList.remove('hidden')
    }
  }

  return (
    <div className="bg-gray-300">
      {/* header */}
      <header className="flex items-center justify-between pt-5">
        <ul className="flex items-center max-w-[300px] px-1 flex-grow border-b-2 border-opacity-[.3] font-serif text-emerald-900 text-sm border-emerald-700 mx-1">
          <li>
            <NavLink onClick={()=>setDirection('ALL')}>All</NavLink>
          </li>
          <li className="mx-3">
            <NavLink onClick={()=>setDirection('MINE')}>Mine</NavLink>
          </li>
          <li>
            <NavLink onClick={()=>setDirection('ONLINE')}>Online</NavLink>
          </li>
        </ul>
        <button className="cursor-pointer text-2xl mr-3 mb-3 text-emerald-800 sm:hidden" onClick={hideGroupSideBar}><FiArrowUpLeft /></button>
      </header>
      {/* group list */}
      <div className="flex items-center justify-end h-[80vh] overflow-auto scroll-bar mr-1">
        {
          direction === 'ALL'
          ?
          <AllGroups />
          :
          direction === 'MINE'
          ?
          <MyGroups />
          :
          direction === 'ONLINE'
          ?
          <OnlineGroups />
          :
          <></>
        }
      </div>
    </div>
  )
}

export default GroupsNav