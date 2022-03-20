import { connectDB, connectTestDB } from "./database/connect";
import createError from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import configRouter from './routes/config';
import transactionRouter from "./routes/transaction";
import { seedFeeData } from "./utils/seedData";
const app = express();

dotenv.config();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "jade");

//Routes
app.use("/", configRouter);
app.use("/compute-transaction-fee", transactionRouter);

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "test") {
  connectTestDB();
} else {
  seedFeeData()
  connectDB();
}
app.get("/", (req: any, res: any) => {
  res.send({ data: "api working" });
});

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
