import Blog from "./components/Blog/Blog";
import Categories from "./components/Categories/Categories";

import "./app.scss";

const App = () => {
  return (
    <div className="app-container">
      <section class="top-section">
        <h1>Blog</h1>
        <div className="top-search">
          <input type="text" />
          <button>Search</button>
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
