import express from 'express';
import { getBars, addBar, deleteBar } from '../controllers/barController.js';

const router = express.Router();

router.get('/', getBars);
router.post('/', addBar);
router.delete('/:id', deleteBar);

export default router;
