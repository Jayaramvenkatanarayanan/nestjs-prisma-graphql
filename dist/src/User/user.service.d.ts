import { User } from "@prisma/client";
import { PrismaService } from "../prisma.service";
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getUser(userID: number): Promise<User | null>;
    getAllUser(): Promise<User[] | null>;
}
