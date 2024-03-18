import axios, { AxiosResponse } from "axios";
import { PostTypes } from "./posts.types";

export const RequestBaseURL = 'http://headless-wordpress.local'


class PostsAPIPrototype {
    async getPosts(params?: PostTypes.QueryParams): Promise<PostTypes.Post[]> {
        const endpoint = `${RequestBaseURL}/wp-json/wp/v2/posts`;
        const response: AxiosResponse<PostTypes.Post[]> = await axios.get(endpoint, { params });

        return response.data;
    }
}

export const PostsAPI = new PostsAPIPrototype()