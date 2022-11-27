import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
import {router} from "./src/router/router";
const PORT = 3000;
const app = express();
const DB_URL = 'mongodb://localhost:27017/testMD4';
mongoose.connect(DB_URL)

    .then(() => console.log('DB Connected!'))

    .catch(error => console.log('DB connection error:', error.message));
app.use(cors());
app.use(bodyParser.json());
app.use('',router);
app.listen(PORT, () => {
    console.log("App running on port: " + PORT);
});