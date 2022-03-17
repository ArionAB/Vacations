import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import { StaticImage } from "gatsby-plugin-image"

//all export must be default
export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../Assets/header.jpg"
            alt="Bora Bora"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>360 Vacations</h1>
              <h4>Imagination is the limit</h4>
            </div>
          </div>
        </header>
      </main>
      <Link to="/about">About</Link>
    </Layout>
  )
}
