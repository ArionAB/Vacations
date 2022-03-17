import React from "react"
import Layout from "../components/Layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
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
      </main>
    </Layout>
  )
}

export default About
