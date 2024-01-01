import { useState } from "react"

import { NavLink } from "react-router-dom"

// sub nav
import AllGroups from "./sub-nav/AllGroups"
import MyGroups from "./sub-nav/MyGroups"
import OnlineGroups from "./sub-nav/OnlineGroups"

const GroupsNav = () => {

  // states
  const [direction,setDirection] = useState('ALL')

  return (
    <div className="bg-gray-300">
      {/* header */}
      <header className="h-[32px] flex items-center justify-end">
        <ul className="flex items-center max-w-[265px] px-1 flex-grow border-b-2 border-opacity-[.3] font-serif text-emerald-900 text-sm border-emerald-700 mx-1">
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