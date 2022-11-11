const express=require('express');
const dotenv=require('dotenv');
const db=require('./app/models/connection')
const userRoute=require('./app/routes/user.route');
const routeRouter=require('./app/routes/routes.route')
const flightRouter=require('./app/routes/flight.route')
const couponRouter=require('./app/routes/coupon.route')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app=express();
dotenv.config();



try {
    db.sequelize.authenticate();
   console.log('Connection has been established successfully.');
 } catch (error) {
   console.error('Unable to connect to the database:', error);
 }
 
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api",userRoute);
app.use("/api",routeRouter);
app.use("/api",flightRouter);
app.use("/api",couponRouter);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})




 