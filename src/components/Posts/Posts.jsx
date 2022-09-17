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
            author={post.author}
            description={post.description}
            text={post.text}
            image={post.image}
          />
        );
      })}
    </div>
  );
};

export default Posts;
