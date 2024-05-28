import db from '../models/index.js';
const { Bar } = db;

export const getBars = async (req, res) => {
  const bars = await Bar.findAll();
  res.json(bars);
};

export const addBar = async (req, res) => {
  const bar = await Bar.create(req.body);
  res.json(bar);
};

export const deleteBar = async (req, res) => {
  await Bar.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};
