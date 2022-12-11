import { CreateTopicDto } from "src/routers/dto/create-topic.dto";
import { Topic } from "./entities";
import { dataSource } from "./index";
export const findAllTopics = async () => {
  const result = await dataSource.getRepository(Topic).find({ relations: ["owner"] });
  return result;
};

export const findOneTopic = async (id: number) => {
  const topic = await dataSource.getRepository(Topic).findOne({
    where: { id },
    relations: ["owner"],
  });
  return topic;
};

export const createTopic = async (data: CreateTopicDto) => {
  const newTopic = dataSource.getRepository(Topic).create(data);
  await dataSource.getRepository(Topic).save(newTopic);
  return newTopic;
};
