import React from "react"
import setupTags from "../../Utils/setUpTags"
import { Link } from "gatsby"
import slugify from "slugify"

const TagList = ({ node }) => {
  const newTags = setupTags(node)

  return (
    <div className="tag-container">
      <h4>Destinations</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })
          //nu asta e prob

          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
