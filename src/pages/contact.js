import React from "react"
import Layout from "../components/Layout/layout"

const Contact = () => {
  return (
    <Layout>
      <main className="contact-page">
        <section>
          <article>
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
                <label htmlFor="name">Your Email</label>
                <input type="email" name="message" id="email"></input>
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
