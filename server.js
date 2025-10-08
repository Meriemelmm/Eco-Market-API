const express=require('express');
const dotenv=require('dotenv');
dotenv.config(); 
const  db =require('./config/db');
const app=express();
const userRoutes=require('./src/routes/UserRoute');
const productRoute=require('./src/routes/ProductRoute');

app.use(express.json());
const PORT=process.env.PORT|| 9000;
 app.use('/users',userRoutes);
 app.use('/products',productRoute);

 
app.get('/', (req, res) => {
  res.send('Hello depuis Express !');
});
db();
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

