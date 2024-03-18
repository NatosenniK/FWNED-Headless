export namespace PostTypes {
    export interface Post {
        id: string;
        title: {
            rendered: string;
        };
        content: {
            rendered: string;
        };
        date: string;
    }

    export interface PostsQuery {
        posts: Post[];
    }

    export interface QueryParams {
        limit?: number;
        category?: string[];
    }
}