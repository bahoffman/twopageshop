import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CancelPage = () => (
  <Layout>
    <SEO title="Cancel Page" />
    <h1 style={{ textAlign: "center" }}>PAYMENT CANCELED!</h1>
    <p>
      Your transaction has been cancelled.The information you entered was not
      retained. You will not receive an email notificationL
    </p>
    <Link to="/">Return to the homepage</Link>
  </Layout>
)

export default CancelPage
