import api from './api';

export const getBars = async () => {
  const response = await api.get('/bars');
  return response.data;
};

export const addBar = async (bar) => {
  const response = await api.post('/bars', bar);
  return response.data;
};

export const deleteBar = async (id) => {
  await api.delete(`/bars/${id}`);
};
