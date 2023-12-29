import {Routes,Route} from 'react-router-dom'
// components
import Header from "./components/Header"

// pages
import LoginSignup from './pages/LoginSignup'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Groups from './pages/Groups'
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
            <Route path='/groups' element={<Groups />} />
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
