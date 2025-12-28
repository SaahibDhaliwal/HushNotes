import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link
      to="/"
      style={{
        position: "absolute",
        top: "1.5rem",
        left: "1.5rem",
        color: "#666",
        fontSize: "1.5rem",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <span>&larr;</span>
      <span style={{ fontSize: "0.9rem" }}>Back</span>
    </Link>
  );
};

export default BackButton;
