import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow">
      <Link to="/" className="navbar-brand mx-4" id="home">
        <i className="bi bi-book-fill"></i> Book Library
      </Link>
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
            <Link to="/booklist" className="nav-link" id="booklist">
              <i className="bi bi-bookmark-fill"></i> Your List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link" id="search">
              <i className="bi bi-search"></i> Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link" id="settings">
              <i className="bi bi-gear-fill"></i> Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
