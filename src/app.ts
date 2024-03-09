const express = require('express');
import { Request, Response, Express } from "express";
import routes from "./routers/routes";
require('dotenv').config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Apple marketplace API')
})

routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
