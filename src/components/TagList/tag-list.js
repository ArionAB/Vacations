import React from "react"
import setupTags from "../../Utils/setUpTags"

const TagList = ({ node }) => {
  const newTags = setupTags(node)

  return <div className="tag-container"></div>
}

export default TagList
