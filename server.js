// 1️⃣ Imports
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const db = require('./config/db');
const { swaggerUi, swaggerSpec } = require('./swagger');
const userRoutes = require('./src/routes/UserRoute');
const productRoute = require('./src/routes/ProductRoute');
const categoryRoute = require('./src/routes/CategoryRoute');
const logger = require('./src/middlewares/logger');
const notFound = require('./src/middlewares/notFound');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 9000;

//  Middlewares de base
app.use(express.json());

//  Routes
app.use('/users', userRoutes);
app.use('/products', productRoute);
app.use('/categories', categoryRoute);

// 4️⃣ Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 
app.use(logger);


app.get('/', (req, res) => {
  res.send('Hello depuis Express !');
});

//  Connexion DB
db();


app.use(notFound);
app.use(errorHandler);

// 9️⃣ Lancer le serveur
app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
