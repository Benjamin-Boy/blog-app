import { Link, useParams } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

// import data from "../data/blogPosts.json";

import "../styles/singlePost.scss";

const SinglePost = ({ posts, filterAuthors }) => {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId));
  const { author, date, title, text, image, category } = post;

  return (
    <>
      <section className="single-post">
        <section className="single-post-top-section">
          <div className="single-post-op-section-image">
            <img src={image} alt="random" />
          </div>
          <div className="single-post-section-header">
            <h2>{title}</h2>
            <h3>
              by{" "}
              <Link to="/blog" onClick={() => filterAuthors(author.name)}>
                {author.name}
              </Link>
            </h3>
            <h4>{date}</h4>
            <div className="social-media-icons">
              <Link to="https://www.facebook.com/" className="social-btn">
                <AiFillFacebook className="facebook" /> Share
              </Link>
              <Link to="https://twitter.com/?lang=fr" className="social-btn">
                <AiOutlineTwitter className="twitter" /> Tweet
              </Link>
              <Link to="https://fr.linkedin.com/" className="social-btn">
                <AiFillLinkedin className="linkedin" /> Share
              </Link>
            </div>
          </div>
        </section>
        <section className="single-post-text">
          <h4>{category.label}</h4>
          {text}
        </section>
      </section>
    </>
  );
};

export default SinglePost;
