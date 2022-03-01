import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        marginTop: "10rem",
        fontSize: "5rem",
      }}
    >
      {" "}
      <p>404 Error</p>
      <Link
        style={{
          marginTop: "10rem",
          display: "inline-block",
          padding: "4rem 2rem",
          borderRadius: "1rem",
          backgroundColor: "lightgreen",
          cursor: "pointer",
          color:'black',
          border: "none",
        }}
        to="/"
      >
        Back to our website
      </Link>
    </div>
  );
}

export default Error;
