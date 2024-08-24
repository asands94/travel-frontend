import { Link } from 'react-router-dom'

const loggedInNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/trips'>Home</Link>
        </li>
        <li>
          <Link to='/trip/add'>Add a Trip</Link>
        </li>
        <li>
          <Link to='/logout'>Logout</Link>
        </li>
      </ul>
    </nav>
  )
}

const loggedOutNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/register'>Sign Up</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}

function Layout({ children }) {
  return (
    <div>
      <header>{localStorage.length ? loggedInNav() : loggedOutNav()}</header>
      {children}
      <footer></footer>
    </div>
  )
}

export default Layout
