import express from 'express';
import { getOrders, addOrder, deleteOrder, updateOrder } from '../controllers/orderController.js';

const router = express.Router();

router.get('/', getOrders);
router.post('/', addOrder);
router.delete('/:id', deleteOrder);
router.put('/:id', updateOrder); // Ajout de la route PUT

export default router;
