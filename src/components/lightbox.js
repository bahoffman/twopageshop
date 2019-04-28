import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`

export default class Lightbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      default: 0,
      index: 0,
    }
    console.log(`constructor`)
  }

  static propTypes = {
    prodImages: PropTypes.array.isRequired,
  }

  render() {
    console.log(`rendered`)
    const { prodImages } = this.props
    return (
      <div style={{ height: "250px", width: "250px" }}>
        <Img fluid={prodImages[this.state.index].node.childImageSharp.fluid} />

        <LightboxContainer>
          {prodImages.map((image, index) => (
            <div
              key={image.node.childImageSharp.fluid.src}
              onClick={() => this.setState({ default: index })}
              onMouseEnter={() => this.setState({ index: index })}
              onMouseLeave={() => this.setState({ index: this.state.default })}
            >
              <Img
                style={{
                  border:
                    index === this.state.default
                      ? "1px solid #021a40"
                      : "1px solid transparent",
                }}
                fluid={image.node.childImageSharp.fluid}
              />
            </div>
          ))}
        </LightboxContainer>
      </div>
    )
  }
}
