import { Link } from "react-router-dom";

import "./post.scss";

const Post = ({ id, date, title, description, image }) => {
  return (
    <div className="post-container">
      <div className="post-content">
        <img src={image} alt="random" />
        <section className="post-infos">
          <h4>{date}</h4>
          <Link to={`posts/${id}`}>
            <h2>
              <span>{title}</span>
            </h2>
          </Link>
          <p>{description}</p>
        </section>
      </div>
      <div className="post-divider"></div>
    </div>
  );
};

export default Post;
