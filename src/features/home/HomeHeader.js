import {NavLink} from 'react-router-dom'
import { GoArrowLeft } from "react-icons/go"

const HomeHeader = () => {

      // show side bar
      const hideSideBar = () => {
        console.log('Some Thing')
        const sideBar = document.querySelector('#home-side-bar')
        const postsDropShadow = document.querySelector('#posts-drop-shadow')

        if(sideBar.classList.contains('left-0')){
            sideBar.classList.add('left-[-100vw]')
            sideBar.classList.remove('left-0')
            postsDropShadow.classList.add('hidden')
        }else{
            sideBar.classList.remove('left-[-100vw]')
            sideBar.classList.add('left-0')
            postsDropShadow.classList.remove('hidden')
        }
    }
  return (
    <div className="h-[42px] bg-emerald-800 flex items-center justify-end">
        <div className="max-w-[300px] h-full flex items-center justify-between px-2 flex-grow">
            <span className='text-2xl text-gray-400 font-bold'>
                <NavLink to='/'>ishare</NavLink>
            </span>
            <span className='text-2xl text-gray-400 cursor-pointer sm:hidden'>
                <GoArrowLeft onClick={hideSideBar}/>
            </span>
        </div>
    </div>
  )
}

export default HomeHeader