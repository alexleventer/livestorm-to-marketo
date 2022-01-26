import { PORT } from "./constants";
import express, {Request, Response} from "express";

const app = express();

app.get( "/", ( req: Request, res: Response ) => {
  res.send( "Hello world!" );
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});