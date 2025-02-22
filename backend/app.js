import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import DbConnection from './database/db.js';

import studentRoutes from './routes/Students.routes.js';
import noticeRoutes from './routes/Notice.routes.js';

const app = express();

DbConnection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res)=>{
    res.send("Hello");
})

app.use('/student', studentRoutes);
app.use("/notice", noticeRoutes);

export default app;