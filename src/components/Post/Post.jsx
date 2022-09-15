import "./post.scss";

const Post = () => {
  return (
    <div className="post-container">
      <div className="post-content">
        <img src="https://picsum.photos/250/100" alt="random" />
        <section className="post-infos">
          <h4>Sept 25, 2022</h4>
          <a href="#">
            <h2>
              <span>Lorem ipsum dolor sit amet.</span>
            </h2>
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id
            nisi minima repudiandae molestias est voluptates impedit, quibusdam
            magni repellendus sint, officiis veritatis excepturi eius aliquam
            natus dignissimos incidunt sapiente.
          </p>
        </section>
      </div>
      <div className="post-divider"></div>
    </div>
  );
};

export default Post;
