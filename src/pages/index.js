import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"

//all export must be default
export default function Home() {
  return (
    <Layout>
      <h1>Hello world!</h1>
      <Link to="/about">About</Link>
    </Layout>
  )
}
