import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="error-status">{error.status}</p>
        <p className="error-status-text">
          <i>{error.statusText}</i>
        </p>
        <p>
          Go to{" "}
          <Link to="/">
            <b>Home page</b>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
