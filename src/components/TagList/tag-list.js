import React from "react"
import setupTags from "../../Utils/setUpTags"
import { Link } from "gatsby"

const TagList = ({ node }) => {
  const newTags = setupTags(node)

  return (
    <div className="tag-container">
      <h4>Destinations</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag

          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
