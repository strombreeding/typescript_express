import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
@Unique(["id"])
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  title: string;

  @Column({ type: "varchar", length: 300, nullable: true })
  description: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  created: Date;

  @ManyToOne((type) => User, (user) => user.ownTopics)
  owner: User;
}
