import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBars, deleteBar } from '../services/barService';

const BarDetails = () => {
  const { id } = useParams();
  const [bar, setBar] = useState(null);

  useEffect(() => {
    const fetchBar = async () => {
      const bars = await getBars();
      const bar = bars.find(b => b.id === parseInt(id));
      setBar(bar);
    };

    fetchBar();
  }, [id]);

  const handleDelete = async () => {
    await deleteBar(id);
    // redirect to home or another page after deletion
  };

  if (!bar) return <div>Loading...</div>;

  return (
    <div>
      <h1>{bar.name}</h1>
      <p>Location: {bar.location}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BarDetails;
