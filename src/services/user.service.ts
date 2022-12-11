import { CreateUserDto } from "../routers/dto/create-user.dto";
import { findAllUsers, createUser, findOneUser } from "../db";
import { User } from "src/db/entities";

export const getAllUsers = async () => {
  const topics = await findAllUsers();
  return topics;
};

export const getOneUser = async (nickname: string): Promise<Error | User> => {
  const user = await findOneUser(nickname);
  if (!user) throw Error("404,존재하지 않는 사용자 입니다.");
  return user;
};

export const join = async (data: CreateUserDto): Promise<Error | User> => {
  const { nickname } = data;
  const userOverlap = await findOneUser(nickname);
  if (userOverlap) throw Error("400,이미 존재하는 닉네임 입니다.");
  const newUser = await createUser(data);
  return newUser;
};
