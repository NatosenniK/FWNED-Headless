export namespace PostTypes {

    export interface PostNode {
        id: string;
        title: string;
        date: string;
        content: string
        featuredImage: {
            node: {
                sourceUrl: string
            }
        }
      }
      export interface AllWpPost {
        nodes: PostNode[];
      }
}
