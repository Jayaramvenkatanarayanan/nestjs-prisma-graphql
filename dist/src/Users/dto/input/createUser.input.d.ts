import { PostCreateInput } from './userPost.input';
import { ProfileCreateInput } from './userProfile.input';
export declare class CreateUserInput {
    email: string;
    name: string;
    posts: [PostCreateInput];
    profile: ProfileCreateInput;
}
