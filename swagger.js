 
  const dotenv = require('dotenv');
  
  dotenv.config();
  const PORT=process.env.PORT;
  
  const MONGO_URL = process.env.MONGODB_URL;
   
   const swaggerUi = require('swagger-ui-express');
   const swaggerJSDoc = require('swagger-jsdoc');
    const swaggerOptions = {
       definition: {
           openapi: '3.0.0',
           info: {
               title: 'My API',
               version: '1.0.0',
               description: 'API documentation using Swagger',
           },
           servers: [
               {
                   url: `http://localhost:${PORT}`,
               },
           ],
     
       },
       
       apis: [,'./src/routes/*.js','./src/models/*.js'], 
   };
   const swaggerSpec = swaggerJSDoc(swaggerOptions);
module.exports = { swaggerUi, swaggerSpec };

