import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import DestinationsList from "../components/DestinationsList/destinations-list"
import SEO from "../components/SEO"

const Contact = ({ data }) => {
  const node = data.allContentfulDestinations.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>

            <p>
              Kombucha pug locavore, narwhal 3 wolf moon shaman edison bulb.
              Unicorn +1 pok pok aesthetic, 3 wolf moon prism post-ironic
              coloring book health goth food truck typewriter.
            </p>

            <p>
              Kombucha raclette kitsch selvage sriracha adaptogen franzen occupy
              meggings retro marfa williamsburg. Four dollar toast master
              cleanse gochujang celiac taiyaki tilde vexillologist fanny pack
              yuccie woke skateboard salvia distillery ennui. Woke post-ironic
              sustainable bicycle rights hoodie offal. Intelligentsia actually
              hexagon, asymmetrical pour-over salvia subway tile.
            </p>

            <p>
              Yuccie lo-fi vice, health goth chia 3 wolf moon cardigan YOLO next
              level 8-bit typewriter polaroid. Kombucha portland meh, etsy banjo
              butcher twee unicorn sustainable celiac dreamcatcher pug
              gluten-free 8-bit bitters.
            </p>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name"></input>
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="email" name="message" id="email"></input>
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
            </form>
          </article>
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

export default Contact
