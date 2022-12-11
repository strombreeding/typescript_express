import { CreateUserDto } from "src/routers/dto/create-user.dto";
import { User } from "./entities";
import { dataSource } from "./index";
export const findAllUsers = async () => {
  const result = await dataSource.getRepository(User).find({ relations: ["ownTopics"] });
  return result;
};

export const findOneUser = async (nickname: string) => {
  const user = await dataSource.getRepository(User).findOne({
    where: { nickname },
    relations: ["ownTopics"],
  });
  return user;
};

export const createUser = async (data: CreateUserDto) => {
  console.log("repo 로 접근");
  console.log(data);
  const newUser = dataSource.getRepository(User).create(data);
  console.log(newUser);
  await dataSource.getRepository(User).save(newUser);
  return newUser;
};
