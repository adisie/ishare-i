
import Posts from "../posts/Posts"
import HomeSideBar from "./HomeSideBar"

const Home = () => {
  return (
    <div className='flex-grow flex relative'>
        <HomeSideBar />
        <Posts />
    </div>
  )
}

export default Home