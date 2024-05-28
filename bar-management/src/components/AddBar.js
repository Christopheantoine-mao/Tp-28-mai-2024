import React, { useState } from 'react';
import { addBar } from '../services/barService';

const AddBar = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBar = await addBar({ name, location });
    console.log('Bar added:', newBar);
    setName('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        required
      />
      <button type="submit">Add Bar</button>
    </form>
  );
};

export default AddBar;
