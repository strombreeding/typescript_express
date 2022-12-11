import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Topic } from "./topic.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  created: Date;

  @Column({ type: "varchar", length: 20 })
  username: string;

  @Column({ type: "varchar", length: 10, unique: true })
  nickname: string;

  @Column()
  profiles: string;

  //   @OneToMany((type) => Topic, (topic) => topic.owner, { eager: false })
  @OneToMany((type) => Topic, (topic) => topic.owner, { nullable: true })
  ownTopics: Topic[];
}
