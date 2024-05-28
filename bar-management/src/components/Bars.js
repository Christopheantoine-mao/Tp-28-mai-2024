// src/components/Bars.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bars = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const fetchBars = async () => {
      try {
        const result = await axios.get('http://localhost:4000/bars', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setBars(result.data);
      } catch (error) {
        console.error('Error fetching bars:', error);
      }
    };

    fetchBars();
  }, []);

  return (
    <div>
      <h1>Bars</h1>
      <ul>
        {bars.map(bar => (
          <li key={bar.id}>{bar.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bars;
