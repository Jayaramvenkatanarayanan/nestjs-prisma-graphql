import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ResolveField,
  Root,
} from "@nestjs/graphql";
import { CreateUserInput } from "./dto/input/createUser.input";
import { User } from "./model/user";
import { PrismaService } from "../prisma.service";
import { UsersService } from "./users.service";
import { Inject } from "@nestjs/common";
import { Post } from "./model/post";
import { Profile } from "./model/profile";

@Resolver(() => User)
export class UserResolver {
  //constructor(private readonly userService: UsersService) {}
  constructor(
    private readonly userService: UsersService,
    @Inject(PrismaService) private prismaService: PrismaService
  ) {}

  @ResolveField()
  async posts(@Root() user: User, @Context() ctx): Promise<Post[]> {
    return this.prismaService.user
      .findUnique({
        where: {
          id: user.id,
        },
      })
      .posts();
  }

  @ResolveField()
  async profile(@Root() user: User, @Context() ctx): Promise<Profile> {
    return this.prismaService.user
      .findUnique({
        where: {
          id: user.id,
        },
      })
      .profile();
  }

  // get All user
  @Query(() => [User], { nullable: "items" })
  async allUsers(@Context() ctx): Promise<User[]> {
    return this.userService.getAllUser();
  }

  // create User.
  @Mutation(() => User)
  async newUser(
    @Args("data") data: CreateUserInput,
    @Context() ctx
  ): Promise<User> {
    return this.userService.createUser(data);
  }

  // //getuserByID

  @Query(() => User, { nullable: true })
  async getUser(@Args("id") id: number, @Context() ctx): Promise<User> {
    return this.userService.getUser(id);
  }

  //userUpdate
  @Mutation(() => Post, { nullable: true })
  async togglePublishPost(@Args("id") id: number): Promise<Post | null> {
    return this.userService.postUpdate(id);
  }

  //DeleteUser

  //userUpdate
  @Mutation(() => User, { nullable: true })
  async deleteUser(@Args("id") id: number): Promise<User | null> {
    return this.userService.deleteUser(id);
  }

  // rawQuery
  @Query(() => [Post])
  async getAllPost() {
    return await this.prismaService.$queryRaw(
      'select * from "public"."Post"'
    );
  }

}
