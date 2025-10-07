const express=require('express');
const dotenv=require('dotenv');
dotenv.config(); 
const  db =require('./config/db');
const app=express();
app.use(express.json());
const PORT=process.env.PORT|| 9000;
app.get('/', (req, res) => {
  res.send('Hello depuis Express !');
});
db();
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

