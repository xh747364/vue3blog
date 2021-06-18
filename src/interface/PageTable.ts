import { FriendLink } from './FriendLink';

export interface PageTable {
    postsCount: number;
    tagsCount: number;
    categoriesCount: number;
    friendLink: FriendLink[];
}