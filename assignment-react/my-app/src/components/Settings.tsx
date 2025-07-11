"use client";

import React from "react";
import Link from "next/link";

const Setting = () => {
  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#0070f3",  // Same as the button color
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const containerStyle:React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f0f0f0",  // Light background to match theme
    minHeight: "100vh",
  };

  return (
    <div style={containerStyle}>
      <h1>Settings</h1>
      <p> settings options.</p>
      
      {/* Back to Home */}
      <Link href="/">
        <button style={buttonStyle}>Back to Home</button>
      </Link>
    </div>
  );
};

export default Setting;
