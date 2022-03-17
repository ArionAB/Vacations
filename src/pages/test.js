import React from "react"
import { graphql } from "gatsby"

const Test = props => {
  console.log(props)
  return <div>Test</div>
}

export const data = graphql`
  query someQuery {
    site {
      siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        simpleData
        complexData {
          name
          age
        }
      }
    }
  }
`

export default Test
