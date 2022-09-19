import "./categories.scss";

// Imports data files/API
// import data from "../../data/blogPosts.json";

// Import custom hooks
import useFetch from "../../hooks/useFetch";

const Categories = ({ filterCategories }) => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/categories"
  );

  let categories = [];
  data.forEach((item) => categories.push(item.attributes.label));

  categories = categories.reduce(
    (acc, cat) => (acc.includes(cat) ? acc : [...acc, cat]),
    []
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error !</p>;

  return (
    <div className="categories-container">
      <h3>All categories</h3>
      <ul>
        {categories.map((category) => {
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
