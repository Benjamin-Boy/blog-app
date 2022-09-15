import Post from "../Post/Post";
import LastPost from "../LastPost/LastPost";

import "./blog.scss";

const Blog = () => {
  return (
    <div className="blog-container">
      <LastPost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Blog;
