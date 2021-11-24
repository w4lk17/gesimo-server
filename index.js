import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import cors from 'cors';

dotenv.config({path:'.config/.env'})

import userRoutes from './routes/users.js';

const app = express();

app.use('/users', userRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
    console.log(`Server start on port: ${PORT}`)
});