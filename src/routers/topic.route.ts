import express, { NextFunction, Request, Response } from "express";
import { validateBody } from "../middlewares/dto-validator";
import { getOneTopic, getTopics, makeTopic } from "../services";
import { CreateTopicDto } from "./dto/create-topic.dto";
export const topicRouter = express();

// 요청에대한 응답, 데이터 유효성검사, 인가, 서비스로직으로 안내 등
topicRouter.get("/", async (req: Request, res: Response) => {
  const result = await getTopics();
  return res.status(200).json(result);
});

topicRouter.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const result = await getOneTopic(Number(id));
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

// jwt 분해하여 id값을 알아내야함. 미들웨어 사용 권장
// 그 후, validator 미들웨어를 사용하여 DTO가 제대로 작동할 수 있게 ㄱㄱ
topicRouter.post("/", validateBody(CreateTopicDto), async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  console.log(data);
  const result = await makeTopic(data);
  return res.status(200).json(result);
});
