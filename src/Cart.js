import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();

  const handleCartClick = () => {
    const userId = 1; // For now, hardcoding the user ID to 1
    navigate(`/user/${userId}`); // Navigate to /user/1
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <button onClick={handleCartClick}>Go to User Page</button>
    </div>
  );
}

export default Cart;
