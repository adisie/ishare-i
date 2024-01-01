import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"

// actions
import { mainNavigator } from "../easy-nav/easyNavSlice"

// icons
import { AiOutlineHome } from "react-icons/ai"
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2"
import { PiUsersThreeThin } from "react-icons/pi"
import { GrChannel } from "react-icons/gr"
import { FiArrowDownRight } from "react-icons/fi"

const HomeNav = () => {

    // hooks
    const dispatch = useDispatch()

    // navigator handler
    const mainNavigatorHandler = direction => {
        // console.log(direction)
        dispatch(mainNavigator(direction))
    } 

  return (
    <div className="flex items-center justify-end">
        <nav className="max-w-[300px] flex items-center px-2 flex-grow">
            <ul className="w-full mt-3">
                <li className="hover:ml-1 transition-all ease-linear duration-300 mb-2 flex items-center py-1 border-b border-emerald-800 border-opacity-[.15] w-full text-emerald-900 min-w-[180px]">
                    <AiOutlineHome className="inline-block text-2xl mr-1"/>
                    <NavLink to='/' className='flex-grow text-sm' onClick={()=>mainNavigatorHandler('HOME')} >
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
                    <NavLink to='/groups' className='flex-grow text-sm' onClick={()=>mainNavigatorHandler('GROUPS')}>
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