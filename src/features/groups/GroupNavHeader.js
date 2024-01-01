import { NavLink } from "react-router-dom"

import { GoArrowLeft } from "react-icons/go"
import { CiSearch } from "react-icons/ci"
import { FaCirclePlus } from "react-icons/fa6"

const GroupNavHeader = () => {
  return (
    <div className="h-[42px] bg-emerald-800 flex items-center justify-end">
        {/* back to home */}
        <div className="flex items-center ml-1">
            <span className="text-2xl text-gray-300 mr-1 cursor-pointer">
                <GoArrowLeft />
            </span>
        </div>
        {/* search bar */}
        <div className="flex items-center justify-center px-2">
            <div className="flex items-center justify-center bg-white bg-opacity-[.1] rounded-full px-1">
                <CiSearch className="text-gray-300 text-2xl cursor-pointer"/>
                <input type="text" className="bg-transparent text-sm text-gray-300 px-1 w-full font-serif focus:outline-none" placeholder="group name"/>
            </div>
        </div>
        {/* new group link */}
        <div className="flex items-center mr-2">
            <NavLink className='text-2xl text-gray-400 cursor-pointer'><FaCirclePlus /></NavLink>
        </div>
    </div>
  )
}

export default GroupNavHeader