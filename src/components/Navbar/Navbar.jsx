import { Link } from "react-router-dom";

import { FiSearch, FiLogIn } from "react-icons/fi";
import "../../app.scss";

const Navbar = ({ search, resetFiltering, searchPosts, handleSearch }) => {
  return (
    <>
      <section className="top-section">
        <Link to="/blog" onClick={resetFiltering}>
          <h1>Blog</h1>
        </Link>
        <div className="top-search">
          <form onSubmit={searchPosts}>
            <input
              type="text"
              placeholder="search..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <FiSearch className="search-icon" />
          </form>
        </div>
        <div className="top-login">
          <a href="/login">
            <FiLogIn className="login-icon" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Navbar;
