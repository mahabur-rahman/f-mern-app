import React from "react";
import { useHistory } from "react-router-dom";

const ErrorPage = () => {
  const history = useHistory();

  const backToHome = () => {
    history.push("/");
  };

  return (
    <>
      <h1 className="text-danger text-center my-5 py-5">
        404, Page not found !
      </h1>
      <div className="text-center">
        <button onClick={backToHome} className="btn btn-primary">
          Back to Home
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
