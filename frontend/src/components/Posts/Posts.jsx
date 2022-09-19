import Post from "../Post/Post";

import "./posts.scss";

const Posts = ({ posts }) => {
  return (
    <div className="posts-container">
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            date={post.date}
            title={post.title}
            description={post.description}
            image={post.image}
          />
        );
      })}
    </div>
  );
};

export default Posts;
