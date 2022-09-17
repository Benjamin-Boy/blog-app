import { Link } from "react-router-dom";

import "../styles/login.scss";

const Login = ({ submitLogin }) => {
  return (
    <>
      <section className="login-top">
        <Link to="/blog">
          <h1>Blog</h1>
        </Link>
      </section>
      <div className="login-container">
        <div className="login-form">
          <form onSubmit={submitLogin}>
            <input type="email" placeholder="Email..." />
            <input type="password" placeholder="Password..." />
            <button>Sign in</button>
          </form>
          <h4>
            Or{" "}
            <Link to="../signup" className="link">
              sign up
            </Link>{" "}
            !
          </h4>
        </div>
      </div>
    </>
  );
};

export default Login;
