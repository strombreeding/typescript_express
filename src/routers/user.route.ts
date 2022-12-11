import { CreateUserDto } from "./dto/create-user.dto";
import express, { NextFunction, Request, Response } from "express";
import { getAllUsers, getOneUser, join } from "../services";
import { validateBody } from "../../src/middlewares/dto-validator";
export const userRouter = express();

// 요청에대한 응답, 데이터 유효성검사, 인가, 서비스로직으로 안내 등
userRouter.get("/", async (req: Request, res: Response) => {
  const result = await getAllUsers();
  return res.status(200).json(result);
});

userRouter.get("/:nickname", async (req: Request, res: Response, next: NextFunction) => {
  const { nickname } = req.params;
  try {
    const user = await getOneUser(nickname);
    return res.status(200).json({
      data: user,
    });
  } catch (err) {
    next(err);
  }
});

userRouter.post("/", validateBody(CreateUserDto), async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  console.log(data);
  try {
    const result = await join(data);
    console.log(result);
    return res.status(200).json({ ok: "ok", result });
  } catch (err) {
    next(err);
  }
});
