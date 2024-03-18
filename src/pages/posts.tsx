import React, { useState, useEffect } from "react"
import Seo from "../components/seo"
import { PostsAPI } from "../services/posts/posts.api";
import { PostTypes } from "../services/posts/posts.types";
import Layout from "../components/layout"
import { Link } from "gatsby";
import PostComponent from "../components/post-component";



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
                    <div>
                        {posts.map(post => (
                            <PostComponent post={post} />

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