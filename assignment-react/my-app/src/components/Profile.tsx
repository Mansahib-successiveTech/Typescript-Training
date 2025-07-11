"use client";

import React from "react";
import Link from "next/link";

const Profile = () => {
  // Sample personal details
  const personalDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    address: "123 Main Street, Springfield, IL",
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Profile</h1>
      
      <div style={{ margin: "20px 0" }}>
        <h2>Personal Details</h2>
        <p><strong>Name:</strong> {personalDetails.name}</p>
        <p><strong>Email:</strong> {personalDetails.email}</p>
        <p><strong>Phone:</strong> {personalDetails.phone}</p>
        <p><strong>Address:</strong> {personalDetails.address}</p>
      </div>

    
      <div style={{ marginTop: "30px" }}>
        <Link href="/">
          <button style={{
            padding: "8px 16px",
            backgroundColor: "grey",  
            color: "white",
            border: "none",
            fontSize: "16px",
          }}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
