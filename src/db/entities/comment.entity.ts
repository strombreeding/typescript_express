// import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToOne, ManyToMany } from "typeorm";

// @Entity()
// @Unique(["id"])
// export class Comment {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ type: "varchar", length: 100 })
//   text: string;

//   @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
//   created: Date;

//   @Column()
//   ownComments: string;

//   @Column()
//   topics: Topic;

//   //   @ManyToMany()
//   //   follower: User[];

//   //   @ManyToMany()
//   //   following: User[];
// }
