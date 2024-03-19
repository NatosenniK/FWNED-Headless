import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/index.css";
import PostComponent from "../components/post-component"

function IndexPage() {
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
          uri
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

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" description={undefined} children={undefined} />

export default IndexPage
