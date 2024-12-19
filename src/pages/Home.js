import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; // Include this for styling

const Home = () => {
  // Sample data for users
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "543-987-6543" },
    { id: 4, name: "Bob Brown", email: "bob@example.com", phone: "321-654-9870" },
    { id: 5, name: "Charlie White", email: "charlie@example.com", phone: "654-321-9870" },
    { id: 6, name: "Diana Green", email: "diana@example.com", phone: "789-123-4567" },
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">User List</h1>
      <div className="users-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h2 className="user-name">{user.name}</h2>
            <p className="user-email">{user.email}</p>
            <p className="user-phone">{user.phone}</p>
            <Link to={`/user/${user.id}`} className="view-button">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
