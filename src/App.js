
import {Routes,Route} from 'react-router-dom'

// pages
import Home from "./features/home/Home"
import  Posts from './features/posts/Posts'
import Groups from "./features/groups/Groups"

const App = () => {
  return (
    <div className="w-screen h-screen flex">
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Posts />} />
          <Route path='/groups' element={<Groups />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App