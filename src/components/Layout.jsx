import { Link } from 'react-router-dom'

const loggedInNav = () => {
  return (
    <nav className='flex justify-between items-center h-20'>
      <ul className='bg-pure rounded-full p-4'>
        <li>
          <Link to='/trips'>Travel Planner</Link>
        </li>
      </ul>
      <ul className='flex bg-pure rounded-full p-4'>
        <li>
          <Link to='/trip/add'>Add a Trip</Link>
        </li>
        <li className='ml-5'>
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
    <>
      <header>{localStorage.length ? loggedInNav() : loggedOutNav()}</header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
