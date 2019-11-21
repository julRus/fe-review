import React from "react";
// import { Link } from "@reach/router";

const ErrorShower = err => {
  return (
    <div>
      {console.log(err)}
      <h1>{err.err.status}</h1>
      <h2>{err.err.msg}</h2>
    </div>
  );
};

export default ErrorShower;
