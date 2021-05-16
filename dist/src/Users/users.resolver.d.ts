import { CreateUserInput } from "./dto/input/createUser.input";
import { User } from "./model/user";
import { PrismaService } from "../prisma.service";
import { UsersService } from "./users.service";
import { Post } from "./model/post";
import { Profile } from "./model/profile";
export declare class UserResolver {
    private readonly userService;
    private prismaService;
    constructor(userService: UsersService, prismaService: PrismaService);
    posts(user: User, ctx: any): Promise<Post[]>;
    profile(user: User, ctx: any): Promise<Profile>;
    allUsers(ctx: any): Promise<User[]>;
    newUser(data: CreateUserInput, ctx: any): Promise<User>;
    getUser(id: number, ctx: any): Promise<User>;
    togglePublishPost(id: number): Promise<Post | null>;
    deleteUser(id: number): Promise<User | null>;
    getAllPost(): Promise<any>;
}
