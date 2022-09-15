import "./categories.scss";

const Categories = () => {
  return (
    <div className="categories-container">
      <h3>All categories</h3>
      <ul>
        <a href="#">
          <li>
            <h4>Interviews</h4>
          </li>
        </a>
        <a href="#">
          <li>
            <h4>Podcast</h4>
          </li>
        </a>
        <a href="#">
          <li>
            <h4>Inspiration</h4>
          </li>
        </a>
        <a href="#">
          <li>
            <h4>Process</h4>
          </li>
        </a>
        <a href="#">
          <li>
            <h4>Meetups</h4>
          </li>
        </a>
        <a href="#">
          <li>
            <h4>Updates</h4>
          </li>
        </a>
        <a href="#">
          <li>
            <h4>Hang Time</h4>
          </li>
        </a>
        <a href="#">
          <li>
            <h4>Community</h4>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Categories;
