import { NavLink } from "react-router-dom"

import { CiSearch } from "react-icons/ci"
import { MdSupervisorAccount } from "react-icons/md"
import { IoMenu } from "react-icons/io5"

const GroupsHeader = () => {

  // show side bar
  const showGroupSideBar = () => {
    const sideBar = document.querySelector('#group-popup-left-side-bar')
    const groupShadow = document.querySelector('#group-drop-shadow')

    if(sideBar.classList.contains('left-[-100vw]')){
      sideBar.classList.remove('left-[-100vw]')
      sideBar.classList.add('left-0')
      groupShadow.classList.remove('hidden')
    }else {
      sideBar.classList.add('left-[-100vw]')
      sideBar.classList.remove('left-0')
      groupShadow.classList.add('hidden')
    }
  }

  return (
    <div className="h-[42px] bg-emerald-800 flex items-center justify-start">
      <div className="flex items-center justify-between max-w-[650px] flex-grow">
        {/* icon and group */}
        <div className=" self-start flex items-center justify-start px-1">
          <NavLink className='sm:hidden'>
            <IoMenu className="text-gray-400 text-xl cursor-pointer" onClick={showGroupSideBar}/>
          </NavLink>
          
        </div>
        {/* search bar */}
        <div className="flex items-center justify-end px-1 ">
          <div className="flex items-center justify-center mr-3 rounded-full bg-white bg-opacity-[.13] px-2">
            <CiSearch className="text-2xl text-gray-400 mr-1 cursor-pointer" />
            <input type="text" placeholder="author" className="bg-transparent w-full text-sm font-serif text-gray-400 focus:outline-none"/>
          </div>
          <NavLink className='flex items-center'>
            <MdSupervisorAccount className="text-gray-400 cursor-pointer text-3xl"/>
            <span className="text-xs font-serif ml-1 italic text-gray-400">groupname</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default GroupsHeader