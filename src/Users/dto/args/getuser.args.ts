import { ArgsType, Field, Int } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class GetUserArgs {
  @Field()
  @IsNotEmpty()
  id: number;
}
