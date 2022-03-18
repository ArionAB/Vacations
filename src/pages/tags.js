import React from "react"
import Layout from "../components/Layout/layout"
import { graphql, Link } from "gatsby"
import setupTags from "../Utils/setUpTags"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulDestinations.nodes)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link to={`/${text}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value}</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulDestinations {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
