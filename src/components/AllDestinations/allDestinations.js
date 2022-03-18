import React from "react"
import DestinationsList from "../DestinationsList/destinations-list"
import TagList from "../TagList/tag-list"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulDestinations {
      nodes {
        id
        title
        tipsTricks
        price
        coord
        content {
          tags
          tips
        }
        photo {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllDestinations = () => {
  const data = useStaticQuery(query)
  const node = data.allContentfulDestinations.nodes

  return (
    <section className="recipes-container">
      <TagList node={node} />
      <DestinationsList node={node} />
    </section>
  )
}

export default AllDestinations
