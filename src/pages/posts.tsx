import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby";
import PostComponent from "../components/post-component";



function Posts() {
    const data = useStaticQuery(graphql`
    query GetPosts {
        allWpPost {
          nodes {
            id
            title
            date
            content
            featuredImage {
              node {
                sourceUrl
                altText
                mediaDetails {
                  width
                  height
                }
              }
            }
          }
        }
      }
    `);

    const posts = data.allWpPost.nodes;

    return (
        <Layout>
            <div>
                {posts.map((post: any) => (
                    <PostComponent key={post.id} post={post} />
                ))}
            </div>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    );
}

export const Head = () => <Seo title="Posts" description={undefined} children={undefined} />

export default Posts;