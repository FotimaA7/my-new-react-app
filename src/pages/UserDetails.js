// src/pages/UserDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importing useParams to get the user ID from the URL
import { fetchUserDetails } from "../services/api"; // Importing fetchUserDetails function

const UserDetails = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      const data = await fetchUserDetails(id); // Fetch details for the specific user
      setUser(data);
    };
    getUserDetails();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details-container">
      <h1>{user.name}</h1>
      <img src={user.photo} alt={user.name} className="user-photo" />
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company}</p>
    </div>
  );
};

export default UserDetails;
