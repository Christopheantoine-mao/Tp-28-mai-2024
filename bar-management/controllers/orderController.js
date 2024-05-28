import db from '../models/index.js';
const { Order } = db;

export const getOrders = async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
};

export const addOrder = async (req, res) => {
  console.log('Requête POST reçue avec les données :', req.body);
  try {
    const order = await Order.create(req.body);
    res.json(order);
  } catch (error) {
    console.error('Erreur lors de la création de la commande:', error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la création de la commande.' });
  }
};

export const deleteOrder = async (req, res) => {
  await Order.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};

export const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await Order.update(req.body, { where: { id } });
    const updatedOrder = await Order.findOne({ where: { id } });
    res.json(updatedOrder);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la commande:', error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de la commande.' });
  }
};

