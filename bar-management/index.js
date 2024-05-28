import express from 'express';
import 'dotenv/config';  // Charger les variables d'environnement
import db from './models/index.js';
import barRoutes from './routes/barRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import beerRoutes from './routes/beerRoutes.js';
import { authenticateToken } from './middleware/auth.js'; // Importer le middleware

const { sequelize } = db;
const app = express();
app.use(express.json());

app.use('/bars', authenticateToken, barRoutes); // Appliquer le middleware aux routes
app.use('/orders', authenticateToken, orderRoutes);
app.use('/beers', authenticateToken, beerRoutes);

const PORT = process.env.PORT || 4000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
