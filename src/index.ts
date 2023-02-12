import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
var cookies = require("cookie-parser");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cookies());

app.get("/", (req: Request, res: Response) => {
	console.log(req.query);
	console.log(JSON.stringify(req.cookies));
	console.log(JSON.stringify(req.signedCookies));
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
