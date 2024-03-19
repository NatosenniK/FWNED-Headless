import React from "react"
import { PostTypes } from "../../services/posts/posts.types";
import { Link } from "gatsby";

function PostComponent(props: { post: PostTypes.PostNode }) {
    return (
        <div key={props.post.id}>
            <Link to={props.post.uri}><h2>{props.post.title}</h2></Link>
            {props.post.featuredImage ? (
                <Link to={props.post.uri}>
                    <img
                        alt="example"
                        src={props.post.featuredImage.node.sourceUrl}
                    />
                </Link>
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
