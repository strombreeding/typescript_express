import { CreateTopicDto } from "src/routers/dto/create-topic.dto";
import { findAllTopics, createTopic, findOneTopic } from "../db";

export const getTopics = async () => {
  const topics = await findAllTopics();
  return topics;
};

export const getOneTopic = async (id: number) => {
  const topic = await findOneTopic(id);
  if (!topic) throw Error("404, 존재하지 않는 토픽입니다.");
  return topic;
};

export const makeTopic = async (data: CreateTopicDto) => {
  const newUser = await createTopic(data);
  return newUser;
};
