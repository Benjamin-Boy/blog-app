import Error from "../../pages/Error";
import Loader from "../../pages/Loader";

import "./categories.scss";

// Import custom hooks
import useFetch from "../../hooks/useFetch";

const Categories = ({ filterCategories }) => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/categories"
  );

  let categories = new Set(data.map((item) => item.attributes.label));

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="categories-container">
      <h3>All categories</h3>
      <ul>
        {Array.from(categories).map((category) => {
          return (
            <li key={category} onClick={() => filterCategories(category)}>
              <h4>{category}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
