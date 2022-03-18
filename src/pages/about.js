import React from "react"
import Layout from "../components/Layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, GatsbyImage, graphql } from "gatsby"
import DestinationsList from "../components/DestinationsList/destinations-list"

const About = ({ data }) => {
  const node = data.allContentfulDestinations.nodes
  //data comes from the query at the bottom of the page

  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>
              Cornhole pop-up copper mug, mixtape tumeric iceland selfies ugh
              organic locavore skateboard chillwave farm-to-table.
            </h2>
            <p>
              Gochujang +1 bitters butcher cray. Everyday carry synth distillery
              yr post-ironic shaman 3 wolf moon you probably haven't heard of
              them.
            </p>
            <p>
              Cronut coloring book occupy authentic irony lomo shaman, brooklyn
              +1 tattooed distillery activated charcoal af helvetica
            </p>
            <Link to="/contact"></Link>
          </article>
          <StaticImage
            src="../assets/pexels-pixabay-208701.jpg"
            alt="Venice"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesome source</h5>
          <DestinationsList node={node} />
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulDestinations(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        tipsTricks
        price
        coord
        content {
          tips
        }
        photo {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default About
