// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { fetchUsers } from "../services/api"; // Importing the fetchUsers function

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
      setLoading(false);
    };
    getUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (users.length === 0) {
    return <div>No users available</div>;
  }

  return (
    <div className="users-container">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <img src={user.photo} alt={user.name} className="user-photo" />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.address}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
