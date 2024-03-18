import React from "react"
import { PostTypes } from "../services/posts/posts.types";


function PostComponent(props: { post: PostTypes.Post }) {
    return (
        <div key={props.post.id}>
            <h2>{props.post.title.rendered}</h2>
            {props.post._embedded?.['wp:featuredmedia']?.[0]?.media_details.sizes.large?.source_url ? (
                <img
                    alt="example"
                    src={props.post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url}
                />
            ) : (
                <></>
            )}

            {props.post.content.rendered.length > 153
                ? props.post.content.rendered
                    .replace(/<[^>]*>/g, '')
                    .split(' ')
                    .reduce((prev, curr) => {
                        return (prev + curr + ' ').length <= 153 ? `${prev} ${curr}` : prev;
                    }, '').trim() + "..."
                : props.post.content.rendered.replace(/<[^>]*>/g, '')
            }
        </div>
    );
};

export default PostComponent
