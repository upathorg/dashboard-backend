import express, { Application, Request, Response } from "express";
import { Client } from 'ts-postgres';



const app: Application = express();

const port = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
