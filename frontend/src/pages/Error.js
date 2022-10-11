import React from "react";
import { Link } from "react-router-dom";

import "../app.scss";

const Error = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Oops, nothing to read over here</p>
      <Link to="/blog">
        <button>Go back home</button>
      </Link>
    </div>
  );
};

Error.propTypes = {};

export default Error;
