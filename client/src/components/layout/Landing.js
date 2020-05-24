import React from "react";
import { Link, Redirect } from "react-router-dom";

export default function Landing() {
  return (
    <div className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Machine Search</span>
          <span className="heading-primary--sub">let the fun begin</span>
        </h1>

        <Link to="/login" className="btn btn--white btn--animated">
          Login
        </Link>
      </div>
    </div>
  );
}
