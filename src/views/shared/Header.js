function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark shadow">
        <a className="navbar-brand mx-4" href="/" id="home">
        <i class="bi bi-book-fill"></i> Book Library
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
              <i class="bi bi-bookmark-fill"></i> Your List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search" id="search">
              <i class="bi bi-search"></i> Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/settings" id="settings">
              <i class="bi bi-gear-fill"></i> Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Header;
  