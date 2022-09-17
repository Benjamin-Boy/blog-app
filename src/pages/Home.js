import { BsChevronDoubleLeft } from "react-icons/bs";

import Posts from "../components/Posts/Posts";
import Categories from "../components/Categories/Categories";

import "../app.scss";

const Home = ({
  posts,
  category,
  author,
  filterCategories,
  resetFiltering,
}) => {
  return (
    <>
      <section className="bottom-section">
        <div
          className={
            category !== "" || author !== ""
              ? "blog-title categorized"
              : "blog-title"
          }
        >
          {category !== "" || author !== "" ? (
            <BsChevronDoubleLeft
              className="reset-filtering"
              onClick={resetFiltering}
            />
          ) : (
            ""
          )}
          <h2>
            {category !== "" ? category : author !== "" ? author : "Stories"}
          </h2>
        </div>

        <div className="blog-categories">
          <Posts posts={posts} />
          <Categories posts={posts} filterCategories={filterCategories} />
        </div>
      </section>
    </>
  );
};

export default Home;
