import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StructData from "../components/structdata"

export const query = graphql`
  query($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      name
      description
      price
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

const Product = ({ data }) => {
  const product = data.productsJson
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <div>
        <h1>{product.title}</h1>
        <Image
          fluid={product.image.childImageSharp.fluid}
          alt={product.name}
          style={{
            float: "left",
            marginRight: "1 rem",
            width: 150,
          }}
        />
        <p>{product.price}</p>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
      <StructData />
    </Layout>
  )
}

export default Product
