import "./post.scss";

const Post = () => {
  return (
    <div className="post-container">
      <img src="https://picsum.photos/200" alt="random" />
      <section className="post-infos">
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id
          nisi minima repudiandae molestias est voluptates impedit, quibusdam
          magni repellendus sint, officiis veritatis excepturi eius aliquam
          natus dignissimos incidunt sapiente. Ut, illo! Molestias mollitia rem,
          sapiente aliquid ad illo. Animi, qui. Iste consequuntur explicabo ad,
          culpa odio itaque natus voluptates perferendis, quas quod optio eos
          aut voluptatibus officia id ipsa!
        </p>
        <button>Lire</button>
      </section>
    </div>
  );
};

export default Post;
