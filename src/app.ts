import express, { Request, Response, NextFunction, RequestHandler } from "express";
import { errorHandler } from "./middlewares/error-handdler";
import { topicRouter, userRouter } from "./routers";
const app = express();

// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());

// Content-Type: application/x-www-form-urlencoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.urlencoded({ extended: false }));
app.use("/topic", topicRouter);
app.use("/user", userRouter);

app.get("/", (req: Request, res: Response) => {
  return res.send(`
    <div>
      <a href="/topic">클릭시 정보</a>
    </div>
  `);
});

app.use(errorHandler);

export default app;
