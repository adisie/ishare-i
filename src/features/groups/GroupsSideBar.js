
// sub pages
import GroupNavHeader from "./GroupNavHeader"
import GroupsNav from "./GroupsNav"

const GroupsSideBar = () => {
  return (
    <div className="absolute min-w-[200px] w-[50%] left-[-100vw] sm:left-0 top-0 z-30 h-full sm:w-[40%] bg-gray-300 sm:relative">
        <GroupNavHeader />
        <GroupsNav />
    </div>
  )
}

export default GroupsSideBar