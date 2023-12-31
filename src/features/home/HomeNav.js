import { NavLink } from "react-router-dom"

// icons
import { AiOutlineHome } from "react-icons/ai"
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2"
import { PiUsersThreeThin } from "react-icons/pi"
import { GrChannel } from "react-icons/gr"
import { FiArrowDownRight } from "react-icons/fi"

const HomeNav = () => {
  return (
    <div className="flex items-center justify-end">
        <nav className="max-w-[300px] flex items-center px-2 flex-grow">
            <ul className="w-full mt-3">
                <li className="hover:ml-1 transition-all ease-linear duration-300 mb-2 flex items-center py-1 border-b border-emerald-800 border-opacity-[.15] w-full text-emerald-900">
                    <AiOutlineHome className="inline-block text-2xl mr-1"/>
                    <NavLink className='flex-grow text-sm'>
                        Home
                    </NavLink>
                </li>
                <li className="hover:ml-1 hover:mt-1 transition-all ease-linear duration-300 mb-2 flex items-center py-1 border-b border-emerald-800 border-opacity-[.15] w-full text-emerald-900">
                    <HiOutlineChatBubbleLeftRight className="inline-block text-2xl mr-1"/>
                    <NavLink className='flex-grow text-sm'>
                        Chats
                    </NavLink>
                </li>
                <li className="hover:ml-1 hover:mt-1 transition-all ease-linear duration-300 mb-2 flex items-center py-1 border-b border-emerald-800 border-opacity-[.15] w-full text-emerald-900">
                    <PiUsersThreeThin className="inline-block text-2xl mr-1"/>
                    <NavLink className='flex-grow text-sm'>
                        Groups
                    </NavLink>
                </li>
                <li className="hover:ml-1 hover:mt-1 transition-all ease-linear duration-300 mb-2 flex items-center py-1 border-b border-emerald-800 border-opacity-[.15] w-full text-emerald-900">
                    <GrChannel className="inline-block text-2xl mr-1"/>
                    <NavLink className='flex-grow text-sm'>
                        Channels
                    </NavLink>
                </li>
                <li className="hover:ml-1 hover:mt-1 transition-all ease-linear duration-300 mb-2 flex items-center py-1 border-b border-emerald-800 border-opacity-[.15] w-full text-emerald-900">
                    <FiArrowDownRight className="inline-block text-2xl mr-1"/>
                    <NavLink className='flex-grow text-sm'>
                        Login
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    </div>
  )
}

export default HomeNav