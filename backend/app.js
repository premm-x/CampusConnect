import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import DbConnection from './database/db.js';
import studentModel from './models/AddStudent.models.js';

import studentRouter from './routes/Students.routes.js';

const app = express();

DbConnection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res)=>{
    res.send("Hello");
})

app.use('/student', studentRouter);

export default app;