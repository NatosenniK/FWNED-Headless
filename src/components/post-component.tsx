import React from "react"
import { PostTypes } from "../services/posts/posts.types";


function PostComponent(props: { post: PostTypes.PostNode }) {
    return (
        <div key={props.post.id}>
            <h2>{props.post.title}</h2>
            {props.post.featuredImage ? (
                <img
                    alt="example"
                    src={props.post.featuredImage.node.sourceUrl}
                />
            ) : (
                <></>
            )}

            {props.post.content.length > 153
                ? props.post.content
                    .replace(/<[^>]*>/g, '')
                    .split(' ')
                    .reduce((prev, curr) => {
                        return (prev + curr + ' ').length <= 153 ? `${prev} ${curr}` : prev;
                    }, '').trim() + "..."
                : props.post.content.replace(/<[^>]*>/g, '')
            }
        </div>
    );
};

export default PostComponent
