import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"

const Product = () => (
  <StaticQuery
    query={graphql`
      query {
        prodImages: allFile(
          filter: { relativeDirectory: { eq: "images/nagc" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox prodImages={data.prodImages.edges} />}
  />
)
export default Product
