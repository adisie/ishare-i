import { GrMenu } from "react-icons/gr"
import { CiSearch } from "react-icons/ci"
import { NavLink } from "react-router-dom"

const PostsHeader = () => {

    // show side bar
    const showSideBar = () => {
        const sideBar = document.querySelector('#home-side-bar')
        const postsDropShadow = document.querySelector('#posts-drop-shadow')

        if(sideBar.classList.contains('left-[-100vw]')){
            sideBar.classList.remove('left-[-100vw]')
            sideBar.classList.add('left-0')
            postsDropShadow.classList.remove('hidden')
        }else{
            sideBar.classList.add('left-[-100vw]')
            sideBar.classList.remove('left-0')
            postsDropShadow.classList.add('hidden')
        }
    }
    
  return (
    <div className="h-[42px] bg-emerald-800 flex items-center justify-start">
        <div className="flex-grow max-w-[700px] w-[300px] h-full flex items-center justify-center">
            {/* toggler icon */}
            <div className="sm:hidden ml-1">
                <GrMenu className="text-2xl cursor-pointer text-gray-400" onClick={showSideBar}/>
            </div>
            {/* search bar container */}
            <div className="flex-grow flex items-center justify-center">
                <div className="flex bg-white bg-opacity-[.13] items-center p-1 rounded-full">
                    <CiSearch className="text-xl mr-1 cursor-pointer text-gray-300"/>
                    <input type="text" placeholder="search" className="focus:outline-none border-0 bg-transparent text-xs text-gray-300 font-serif"/>
                </div>
            </div>
            {/* login contaner */}
            <div className="sm:hidden">
                <NavLink className='text-gray-400 px-[1.3rem] py-[.25rem] mr-1 cursor-pointer font-serif text-sm border rounded-[.3rem] border-gray-300 border-opacity-[.5]'>Login</NavLink>
            </div>
        </div>
    </div>
  )
}

export default PostsHeader