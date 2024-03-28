import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import { PostTypes } from "../../services/posts/posts.types"
import Seo from "../seo";
import './post-template.scss'
import Sidebar from "../sidebar/sidebar";
import { formatDate } from "../../services/date-formatter/date-formatter";

export default function PostTemplate({ data }: { data: PostTypes.QueryResult }) {

  const { wpPost } = data;

  if (!wpPost) {
    return <div>Post not found</div>;
  }

  const Head = () => <Seo title={wpPost.title} description={undefined} children={undefined} />;
  
  return (
    <>
      <Head />
      <Layout>
        <div className="d-flex post-template">
          <div style={{ paddingRight: "50px"}} className="col-9">
            <h1>{wpPost.title}</h1>
            <div className="meta-data">
              <div className="author">By: <span>{wpPost.author.node.name}</span></div>
              <div className="date">Published: <span>{formatDate(wpPost.date)}</span></div>
            </div>
            {wpPost.featuredImage &&
              <img
                  width={'100%'}
                  src={wpPost.featuredImage.node.sourceUrl}
              />
            }
            <div dangerouslySetInnerHTML={{ __html: wpPost.content }} />
          </div>
          <Sidebar />
        </div>
      </Layout>
    </>
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
      author {
        node {
          name
        }
      }
      date
    }
  }
`
