import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';


//Create the express app
const app = express();


//Use middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


//Load routes



//Make database connection
await mongoose.connect(process.env.MONGO_URI);


//Listen for incoming request
const port = process.env.Port || 4000;
app.listen(port, () => {
   console.log('Express app is running');
});