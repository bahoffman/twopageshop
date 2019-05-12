import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StructData2 from "../components/structdata2"

export const query = graphql`
  query($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      name
      brand
      category
      sku
      slug
      description
      price
      currency
      MPN
      UPC
      EAN
      condition
      multipack
      is_bundle
      shipping
      tax
      availability
      googleProductCategory
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
      <StructData2 product={product} />
      <div>
        <h1>{product.name}</h1>
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
    </Layout>
  )
}

export default Product
