
import {Routes,Route} from 'react-router-dom'

// pages
import Home from "./features/home/Home"
import  Posts from './features/posts/Posts'
import Groups from "./features/groups/Groups"

// groups sub nav
import AllGroups from './features/groups/sub-nav/AllGroups'
import MyGroups from './features/groups/sub-nav/MyGroups'
import OnlineGroups from './features/groups/sub-nav/OnlineGroups'

const App = () => {
  return (
    <div className="w-screen h-screen flex">
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Posts />} />
          <Route path='/groups' element={<Groups />}>
            {/* <Route index element={<AllGroups />} /> */}
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App