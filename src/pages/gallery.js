import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allFile {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            height: 200
            width: 200
          )
        }
      }
    }
  }
`

/* const image = getImage(data.avatar)
// This is the same as:
const image = data?.avatar?.childImageSharp?.gatsbyImageData */

// const pathToImage = getImage(image) === image.childImageSharp.gatsbyImageData

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <Layout>
      <main className="page">
        <h1>Gallery</h1>
        {nodes.map((image, index) => {
          const pathToImage = getImage(image)
          return (
            <div key="index">
              <GatsbyImage
                image={pathToImage}
                alt={image.name}
                className="gallery-img"
              />
            </div>
          )
        })}
      </main>
    </Layout>
  )
}

export default Gallery
