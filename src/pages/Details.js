// src/pages/Details.js

import React, { useState, useEffect } from 'react'; // Importing useState and useEffect from React
import { useParams } from 'react-router-dom'; // Importing useParams to get the ID from the URL
import { fetchData } from '../services/api'; // Importing fetchData from api.js

const Details = () => {
  const { id } = useParams();  // Get the post ID from the URL
  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      const data = await fetchData(id);  // Fetch the post with the specific ID
      setPostDetails(data);
    };

    fetchPostDetails();
  }, [id]);  // This runs again if the ID changes

  return (
    <div>
      {postDetails ? (
        <div>
          <h1>{postDetails.name}</h1>
          <p>{postDetails.company}</p>
          <p>{postDetails.email}</p>
          <p>{postDetails.address}</p>
          <p>{postDetails.zip}</p>
          <p>{postDetails.state}, {postDetails.country}</p>
          <p>{postDetails.phone}</p>
          <img src={postDetails.photo} alt={postDetails.name} className="post-photo" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Details;
