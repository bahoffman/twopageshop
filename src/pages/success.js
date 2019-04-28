import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SuccessPage = () => (
  <Layout>
    <SEO title="Success Page" />
    <div
      style={{
        fontSize: `39px`,
        border: "1px solid black",
      }}
    >
      <p
        style={{
          textAlign: "center",
        }}
      >
        Thank you, we have received your order and payment!
      </p>
    </div>
    <div style={{margin: "100px 0"}}>
      <p>
        <b>Thank you for your payment.</b> Your transaction has been completed.
        We have received your payment and a receipt for your purchase has been
        emailed to you. You may log into your account at www.paypal.com to view
        details of this transaction
      </p>
    </div>
    <div>
      <h3>What happens next?</h3>
      <p>
        We understand how important your order is to you. We will quickly
        process, pack and ship your order. We always ship within 48 hours or
        less. Tracking information will be emailed to you as soon as it is
        ready. If you have any questions or concerns, PLEASE EMAIL US. We will
        answer your email quickly. We ALWAYS reply fast because emails are very
        important to us.
      </p>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SuccessPage
