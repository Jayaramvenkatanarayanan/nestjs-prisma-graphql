import 'reflect-metadata';
import { User } from './user';
export declare class Profile {
    id: number;
    bio: string;
    author?: User | null;
    userId: number;
}
