import data from "../../data/blogPosts.json";

import "./categories.scss";

const Categories = ({ filterCategories }) => {
  let categories = [];
  data.forEach((item) => categories.push(item.category));

  categories = categories.reduce(
    (acc, cat) => (acc.includes(cat) ? acc : [...acc, cat]),
    []
  );

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
