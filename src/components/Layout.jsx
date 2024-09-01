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
    <nav className='flex justify-between items-center h-20 mx-body'>
      <ul className='p-4'>
        <li>
          <Link to='/'>Travel Planner</Link>
        </li>
      </ul>
      <ul className='flex p-4'>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li className='ml-5 text-primary font-semibold'>
          <Link to='/register'>Sign Up</Link>
        </li>
      </ul>
    </nav>
  )
}

function Layout({ children, isAuthorized }) {
  return (
    <>
      <header className='bg-pure'>
        {isAuthorized ? loggedInNav() : loggedOutNav()}
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
