function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <a className="navbar-brand mx-4" href="/" id="home">
          Book Thing
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/booklist" id="booklist">
                Your List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search" id="search">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/settings" id="settings">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Header;
  