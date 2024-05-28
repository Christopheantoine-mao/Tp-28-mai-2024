import React from 'react';
import BarList from '../components/BarList';
import AddBar from '../components/AddBar';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <AddBar />
      <BarList />
    </div>
  );
};

export default HomePage;
