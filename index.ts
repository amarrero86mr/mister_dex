import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from 'path';

const app: Express = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
      res.sendFile(__dirname + '/public/index.html');
      res.status(200);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

