import Blog from "./components/Blog/Blog";
import Categories from "./components/Categories/Categories";
import { FiSearch } from "react-icons/fi";

import "./app.scss";

const App = () => {
  return (
    <div className="app-container">
      <section className="top-section">
        <h1>Blog</h1>
        <div className="top-search">
          <input type="text" placeholder="search..." />
          <FiSearch className="search-icon" />
        </div>
      </section>
      <section className="bottom-section">
        <Blog />
        <Categories />
      </section>
    </div>
  );
};

export default App;
