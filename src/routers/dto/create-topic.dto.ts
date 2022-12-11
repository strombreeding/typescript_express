import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { User } from "../../db/entities";

export class CreateTopicDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly owner: User;
}
