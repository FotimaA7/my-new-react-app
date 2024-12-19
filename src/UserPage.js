import React from 'react';
import { useParams } from 'react-router-dom';

function UserPage() {
  const { id } = useParams(); // Get the 'id' from the URL

  // Sample user data based on the ID
  const user = {
    id: id,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
  };

  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default UserPage;
