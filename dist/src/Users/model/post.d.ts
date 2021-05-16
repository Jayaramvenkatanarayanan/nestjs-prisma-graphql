import "reflect-metadata";
import { User } from "./user";
export declare class Post {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string | null;
    published?: boolean | null;
    viewCount: number;
    author?: User | null;
}
