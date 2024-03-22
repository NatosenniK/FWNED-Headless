import React from "react"
import { PostTypes } from "../../services/posts/posts.types";
import { Link } from "gatsby";
import { formatDate } from "../../services/date-formatter/date-formatter";
import './post-component.css'

interface PostComponentProps {
    post: PostTypes.PostNode;
    isMostRecent?: boolean;
}

function PostComponent({ post, isMostRecent = false }: PostComponentProps) {

    return isMostRecent ? (
        <div key={post.id} className="most-recent mb-4">
                {post.featuredImage ? (
                    <Link to={post.uri}>
                        <div className="default-image" 
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%), url(${post.featuredImage.node.sourceUrl})`,
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                            }}
                        >
                            <h2>{post.title}</h2>
                        </div>
                        <div className="meta-data">
                            <div className="date">Published: <span>{formatDate(post.date)}</span></div>
                            <div className="author">By: <span>Matt Kinne</span></div>
                        </div>
                    </Link>
                ) : (
                    <>
                        <Link to={post.uri}>
                            <div className="default-image"
                                style={{
                                    backgroundImage: `url(https://fwned.com/wp-content/uploads/2017/06/FWNED.png)`,
                                    backgroundPosition: 'center center',
                                    backgroundSize: 'auto',
                                    backgroundRepeat: 'no-repeat',
                                }}>
                            </div>
                        </Link>
                    </>
                )}

                <div className="post-excerpt">
                    {post.content.length > 153
                        ? post.content
                            .replace(/<[^>]*>/g, '')
                            .split(' ')
                            .reduce((prev, curr) => {
                                return (prev + curr + ' ').length <= 153 ? `${prev} ${curr}` : prev;
                            }, '').trim() + "..."
                        : post.content.replace(/<[^>]*>/g, '')
                    }
                </div>
            </div>
    ) : (
        <div key={post.id} className="col-12 d-flex mb-4 post-list-small">
                <div className="col-4 image-container">
                    {post.featuredImage ? (
                        <Link to={post.uri}>
                            <div className="default-image" 
                                style={{
                                    backgroundImage: `url(${post.featuredImage.node.sourceUrl})`,
                                    backgroundPosition: 'center center',
                                    backgroundSize: 'cover',
                                }}
                            >
                            </div>
                        </Link>
                    ) : (
                        
                            <Link to={post.uri}>
                                <div className="default-image"
                                    style={{
                                        backgroundImage: `url(https://fwned.com/wp-content/uploads/2017/06/FWNED.png)`,
                                        backgroundPosition: 'center center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                }}>
                            </div>
                            </Link>
                    )}
                </div>
                <div className="col-8 content-container">
                    <Link to={post.uri}><h2>{post.title}</h2></Link>
                    <div className="meta-data">
                        <div className="date">Published: <span>{formatDate(post.date)}</span></div>
                        <div className="pipe-spacer"> | </div>
                        <div className="author">By: <span>Matt Kinne</span></div>
                    </div>
                    {post.content.length > 153
                        ? post.content
                            .replace(/<[^>]*>/g, '')
                            .split(' ')
                            .reduce((prev, curr) => {
                                return (prev + curr + ' ').length <= 153 ? `${prev} ${curr}` : prev;
                            }, '').trim() + "..."
                        : post.content.replace(/<[^>]*>/g, '')
                    }
                </div>
            </div>
    );
};

export default PostComponent


