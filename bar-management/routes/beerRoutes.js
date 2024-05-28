import express from 'express';
import { getBeers, addBeer } from '../controllers/beerController.js';

const router = express.Router();

router.get('/', getBeers);
router.post('/', addBeer);

export default router;
