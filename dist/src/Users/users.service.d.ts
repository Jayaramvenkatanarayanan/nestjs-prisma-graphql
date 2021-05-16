import { User } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { CreateUserInput } from "./dto/input/createUser.input";
import { Post } from "./model/post";
export declare class UsersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAllUser(): Promise<User[]>;
    createUser(createUserData: CreateUserInput): Promise<User>;
    getUser(id: number): Promise<User>;
    postUpdate(id: number): Promise<Post | null>;
    deleteUser(id: number): Promise<User | null>;
}
