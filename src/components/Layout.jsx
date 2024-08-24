import { Link } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/trips'>Home</Link>
            </li>
            <li>
              {' '}
              <Link to='/trip/add'>Add a Trip</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <footer></footer>
    </div>
  )
}

export default Layout
