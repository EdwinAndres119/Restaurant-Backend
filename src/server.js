require('./DataBase/sync.js');

const connection = require('./DataBase/connection.js');
const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

//routers
const restaurantRouter = require('./Routers/restaurantRouters.js');
const productRouter = require('./Routers/productsRouters.js');
const departmentRouter = require('./Routers/departmentRouters.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.listen(port, ()=> {
    console.log("The application is running on port: " + port);
});
//api
app.use('/apiRes', restaurantRouter);
app.use('/apiPro', productRouter);
app.use('/apiDepar', departmentRouter);