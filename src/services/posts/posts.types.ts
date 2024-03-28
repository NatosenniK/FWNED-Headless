export namespace PostTypes {

    export interface PostNode {
        id: string
        title: string
        date: string
        content: string
        featuredImage: {
            node: {
                sourceUrl: string
            }
        }
        uri: string
      }
      export interface AllWpPost {
        nodes: PostNode[]
      }

      export interface CompletePostData {
        componentChunkName: string
        path: string
        result: {
          data: {
            wpPost: {
              title: string
              content: string
            }
          }
        }
        pageContext: {
          id: string
        }
      }

      export interface QueryResult {
        wpPost: {
          title: string
          content: string
          featuredImage: {
            node: {
                sourceUrl: string
            }
          }
          author: {
            node: {
              name: string
            }
          }
          date: string
          seo: {
            fullHead: string
            metaDesc: string
            title: string
          }
        }
      }
      
}
