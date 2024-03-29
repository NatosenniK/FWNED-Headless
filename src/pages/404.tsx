import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

function NotFoundPage() {

  return (
    <Layout>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" description={undefined} children={undefined} />

export default NotFoundPage
