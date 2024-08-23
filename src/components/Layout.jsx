function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Add Trip</li>
          </ul>
        </nav>
      </header>
      {children}
      <footer></footer>
    </div>
  )
}

export default Layout
