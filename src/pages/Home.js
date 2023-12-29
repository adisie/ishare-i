import {Outlet,NavLink} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/groups'}>Groups</NavLink>
          </li>
          <li>
            <NavLink to={'/channels'}>Channels</NavLink>
          </li>
          <li>
            <NavLink to={'/login'}>Login</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Home
