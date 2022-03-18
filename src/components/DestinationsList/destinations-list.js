import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
const DestinationsList = ({ node = [] }) => {
  //node = [] default value is an empty array
  return (
    <div className="recipes-list">
      {node.map(dest => {
        const { content, coord, id, photo, price, tipsTricks, title } = dest
        const pathToImage = getImage(photo)
        const slug = slugify(title, { lower: true })
        return (
          <Link to={`/${title}`} className="recipe" key={id}>
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            ></GatsbyImage>
            <h5>{title}</h5>
            <p>
              Price: ${price} | Coordinates: {coord}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default DestinationsList
