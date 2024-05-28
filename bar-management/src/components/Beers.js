// src/components/Beers.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const result = await axios.get('http://localhost:4000/beers', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setBeers(result.data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <div>
      <h1>Beers</h1>
      <ul>
        {beers.map(beer => (
          <li key={beer.id}>{beer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Beers;
