import db from '../models/index.js';
const { Beer } = db;

export const getBeers = async (req, res) => {
  const beers = await Beer.findAll();
  res.json(beers);
};

export const addBeer = async (req, res) => {
  const beer = await Beer.create(req.body);
  res.json(beer);
};
