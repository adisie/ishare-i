
import HomeHeader from "./HomeHeader"
import HomeNav from "./HomeNav"

const HomeSideBar = () => {
  return (
    <div className='absolute w-[50%] left-[-100vw] sm:left-0 top-0 z-30 h-full sm:w-[40%] bg-gray-300 sm:relative' id="home-side-bar">
        <HomeHeader />
        <HomeNav />
    </div>
  )
}

export default HomeSideBar