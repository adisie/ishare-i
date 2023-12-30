import {Routes,Route} from 'react-router-dom'
// components
import Header from "./components/Header"

// pages
import LoginSignup from './pages/LoginSignup'
import Home from './features/home/Home'
import Posts from './pages/Posts'
import Group from './features/groups/Group'
import Channels from './pages/Channels'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route>
          <Route path='/' element={<Home />}>
            <Route index element={<Posts />} />
            <Route path='/groups' element={<Group />} />
            <Route path='/channels' element={<Channels />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<LoginSignup />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
