import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BuyNow from "../components/ppButton"
import Products from "../components/prods"
import TabView from "../components/tabView"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: `100%`,

        //marginBottom: `1.45rem`,
      }}
    >
      <Products />
      <p>
        <b>$40.00</b> with FREE SHIPPING
      </p>
      <BuyNow />
      <TabView />
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
