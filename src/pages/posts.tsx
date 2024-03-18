import React, { useState, useEffect } from "react"
import Seo from "../components/seo"
import { PostsAPI } from "../services/posts/posts.api";
import { PostTypes } from "../services/posts/posts.types";
import Layout from "../components/layout"
import { Link } from "gatsby";

function Posts() {
    // State for storing posts data
    const [posts, setPosts] = useState<PostTypes.Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const queryParams: PostTypes.QueryParams = {
        limit: 5,
        };

        // Fetch posts data
        PostsAPI.getPosts(queryParams)
        .then(fetchedPosts => {
            setPosts(fetchedPosts);
            setLoading(false);
        })
        .catch(err => {
            console.error("Failed to fetch posts:", err);
            setError('Failed to fetch posts');
            setLoading(false);
        });
    }, []);

    return (
        <Layout>
            {loading ? (
                <>Loading...</>
            ) : (
                <>
                    <h1>Hi from the Posts page</h1>
                    <p>Welcome to Posts</p>
                
                    <div>
                        {posts.map(post => (
                            <div key={post.id}>
                            <h2>{post.title.rendered}</h2>
                            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                            </div>
                        ))}
                    </div>

                    <Link to="/">Go back to the homepage</Link>
                </>
            )}

            {error && 
                <>Error: {error}</>
            }
           
        </Layout>
    );
}

export const Head = () => <Seo title="Posts" description={undefined} children={undefined} />

export default Posts;