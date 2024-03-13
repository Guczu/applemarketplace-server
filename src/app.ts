const express = require('express');
import { Request, Response, Express } from "express";
import routes from "./routers/routes";
import cors from 'cors';
require('dotenv').config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const corsOptions = {
  origin: [
      'http://localhost:5173'
    ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Apple marketplace API')
})

app.use(cors(corsOptions));
routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
