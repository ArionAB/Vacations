import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { AiOutlineDollarCircle } from "react-icons/ai"
import { FiMapPin } from "react-icons/fi"
import Layout from "../components/Layout/layout"
import slugify from "slugify"
import SEO from "../components/SEO"

const DestinationTemplate = ({ data }) => {
  const {
    title,
    photo,
    coord,
    content,
    description: { description },
    price,
  } = data.contentfulDestinations
  const pathToImage = getImage(photo)
  const { tags, tips } = content
  return (
    <Layout>
      <SEO title={title} />
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article className="recipe-info">
                  <AiOutlineDollarCircle />
                  <h5>Price</h5>
                  <p>{price}</p>
                </article>
                <article>
                  <FiMapPin />
                  <h5>Coordinates</h5>
                  <p>{coord}</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags :{" "}
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true })
                  //nu asta e problema
                  return (
                    <Link to={`/tags/${slug}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>Tips & Tricks</h4>
              {tips.map((tip, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>Tip {index + 1}</p>
                    </header>
                    <p>{tip}</p>
                  </div>
                )
              })}
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleDestination($title: String) {
    contentfulDestinations(title: { eq: $title }) {
      title
      photo {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
      coord
      content {
        tags
        tips
      }
      description {
        description
      }
      price
    }
  }
`

export default DestinationTemplate
