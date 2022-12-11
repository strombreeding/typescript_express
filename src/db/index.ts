import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  username: "express",
  password: "111111",
  database: "practice",
  port: 3306,
  entities: ["src/db/entities/*.entity.ts"],
  logging: false,
  synchronize: true,
});

// export repository rogic
export * from "./topic.repo";
export * from "./user.repo";
