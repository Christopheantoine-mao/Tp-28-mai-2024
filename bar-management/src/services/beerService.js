import api from './api';

export const getBeers = async () => {
  const response = await api.get('/beers');
  return response.data;
};

export const addBeer = async (beer) => {
  const response = await api.post('/beers', beer);
  return response.data;
};

export const deleteBeer = async (id) => {
  await api.delete(`/beers/${id}`);
};
