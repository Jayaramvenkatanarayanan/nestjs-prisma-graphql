import "reflect-metadata";
import { Post } from "./post";
import { Profile } from "./Profile";
export declare class User {
    id: number;
    email: string;
    name: string;
    posts?: [Post] | null;
    profile?: Profile | null;
}
