import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray, IsNotEmpty } from "class-validator";

@ArgsType()
export class GetUsersArgs {
  @Field(() => [String])
  @IsArray()
  userId: string[];
}
