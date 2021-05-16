import { Injectable } from "@nestjs/common";
import { User, Post as Postmodule } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { CreateUserInput } from "./dto/input/createUser.input";
import { Post } from "./model/post";

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  // get all users
  async getAllUser(): Promise<User[]> {
    return await this.prismaService.user.findMany();
  }

  // create user
  async createUser(createUserData: CreateUserInput): Promise<User> {
    const postData = createUserData.posts?.map((post) => {
      return { title: post.title, content: post.content || undefined };
    });
    const profileData = createUserData.profile;
    return await this.prismaService.user.create({
      data: {
        email: createUserData.email,
        name: createUserData.name,
        posts: {
          create: postData,
        },
        profile: {
          create: profileData,
        },
      },
    });
  }

  // get user by id

  async getUser(id: number): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }

  // get user update
  async postUpdate(id: number): Promise<Post | null> {
    const post = await this.prismaService.post.findUnique({
      where: { id: id || undefined },
      select: {
        published: true,
      },
    });
    return this.prismaService.post.update({
      where: { id: id || undefined },
      data: { published: !post?.published },
    });
  }

  // deleteUser
  async deleteUser(id: number): Promise<User | null> {
    return await this.prismaService.user.delete({
      where: { id: id },
    });
  }


}
