import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "0.5rem", color: "#d4d4d8" }}>
        404
      </h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>Page not found</p>
      <Link
        to="/"
        style={{
          color: "#3b82f6",
          textDecoration: "none",
        }}
      >
        &larr; Back to home
      </Link>
    </div>
  );
};

export default NotFound;
