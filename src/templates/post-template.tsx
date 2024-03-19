import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { PostTypes } from "../services/posts/posts.types"

export default function PostTemplate({ data }: { data: PostTypes.QueryResult }) {

  const { wpPost } = data;

  if (!wpPost) {
    return <div>Post not found</div>;
  }

  console.log(wpPost)

  return (
    <Layout>
      <div>
        <h1>{wpPost.title}</h1>
        {wpPost.featuredImage &&
          <img
              alt="example"
              src={wpPost.featuredImage.node.sourceUrl}
          />
        }
        <div dangerouslySetInnerHTML={{ __html: wpPost.content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
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
`
