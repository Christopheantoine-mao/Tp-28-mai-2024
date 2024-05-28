import React, { useState, useEffect } from 'react';
import { getBars, deleteBar } from '../services/barService';

const BarList = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const fetchBars = async () => {
      const bars = await getBars();
      setBars(bars);
    };

    fetchBars();
  }, []);

  const handleDelete = async (id) => {
    await deleteBar(id);
    setBars(bars.filter(bar => bar.id !== id));
  };

  return (
    <div>
      <h1>List of Bars</h1>
      <ul>
        {bars.map(bar => (
          <li key={bar.id}>
            {bar.name} - {bar.location}
            <button onClick={() => handleDelete(bar.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BarList;
