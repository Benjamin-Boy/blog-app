import { Link } from "react-router-dom";

import "../styles/login.scss";

const Login = ({ submitSignup }) => {
  return (
    <>
      <section className="login-top">
        <Link to="/blog">
          <h1>Blog</h1>
        </Link>
      </section>
      <div className="login-container">
        <div className="login-form">
          <form onSubmit={submitSignup}>
            <input type="email" placeholder="Email..." />
            <input type="password" placeholder="Password..." />
            <input type="password" placeholder="Confirm password..." />
            <button>Sign up</button>
          </form>
          <h4>
            Or{" "}
            <Link to="../login" className="link">
              sign in
            </Link>{" "}
            !
          </h4>
        </div>
      </div>
    </>
  );
};

export default Login;
