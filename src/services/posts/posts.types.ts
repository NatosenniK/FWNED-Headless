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
        _embedded?: {
            'wp:featuredmedia'?: Array<{
                source_url: string;
                media_details: {
                    sizes: MediaSizes;
                }
            }>;
        };
        featuredImageUrl: string
    }

    // Define each size with the potential properties it might have, including `source_url`.
    export interface MediaSize {
        source_url: string;
        width?: number;
        height?: number;
    }

    // Map available size keys to their corresponding properties.
    export interface MediaSizes {
        full?: MediaSize;
        large?: MediaSize;
        medium?: MediaSize;
        medium_large?: MediaSize;
        thumbnail?: MediaSize;
        [key: string]: MediaSize | undefined; // This allows for custom sizes beyond the predefined ones.
    }

    export interface PostsQuery {
        posts: Post[];
    }

    export interface QueryParams {
        limit?: number;
        category?: string[];
    }
}
