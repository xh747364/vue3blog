export interface ThTagsList {
    _id: string;
    title: string;
    createDate: string;
}

export interface ThTagsListDetail{
    title: string;
}

export  interface ThTagsDetail{
    _id: string;
    postsData: ThTagsList[];
    count: number;
}