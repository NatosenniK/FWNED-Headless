import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import "../components/index.scss";
import PostComponent from "../components/post-component/post-component"
import Sidebar from "../components/sidebar/sidebar"

function IndexPage() {
  const data = useStaticQuery(graphql`
  query GetPosts {
      allWpPost(sort: {fields: date, order: DESC}) {
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
          <div className="d-lg-flex">
            <div style={{ maxWidth: "var(--size-content)"}} className="col-12 col-lg-9 pe-lg-3">
                {posts.map((post: any, index: number) => (
                  <PostComponent key={post.id} post={post} isMostRecent={index === 0} />
                ))}
            </div>
            <Sidebar />
          </div>

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
