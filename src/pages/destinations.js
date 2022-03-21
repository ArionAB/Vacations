import React from "react"
import AllDestinations from "../components/AllDestinations/allDestinations"
import Layout from "../components/Layout/layout"
import SEO from "../components/SEO"

const Destinations = () => {
  return (
    <Layout>
      <SEO title="Destinations" />
      <main className="page">
        <AllDestinations />
      </main>
    </Layout>
  )
}

export default Destinations
