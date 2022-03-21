import React from "react"
import { graphql } from "gatsby"
import DestinationsList from "../components/DestinationsList/destinations-list"
import Layout from "../components/Layout/layout"
import SEO from "../components/SEO"

const TagTemplate = ({ data, pageContext }) => {
  const node = data.allContentfulDestinations.nodes

  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <DestinationsList node={node} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetTags($tag: String) {
    allContentfulDestinations(
      sort: { order: ASC, fields: title }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        content {
          tags
          id
        }
        title
        coord
        price
        description {
          description
        }
        photo {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`
export default TagTemplate
