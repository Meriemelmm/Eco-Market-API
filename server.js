const express=require('express');
const dotenv=require('dotenv');
dotenv.config(); 
const  db =require('./config/db');

const app=express();
// const { swaggerUi, swaggerSpec } = require('./swagger');
const userRoutes=require('./src/routes/UserRoute');
const productRoute=require('./src/routes/ProductRoute');
const categoryRoute=require('./src/routes/CategoryRoute');
const logger=require('./src/middlewares/logger');
const notFound=require('./src/middlewares/notFound');
const errorHandler=require('./src/middlewares/errorHandler');




app.use(express.json());
const PORT=process.env.PORT|| 9000;
 app.use('/users',userRoutes);
 app.use('/products',productRoute);
 app.use('/categories',categoryRoute);
app.use(logger);

// Not Found
app.use(notFound);
app.get('/', (req, res) => {
  res.send('Hello depuis Express !');
});
db();
app.use(errorHandler);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

