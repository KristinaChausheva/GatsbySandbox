import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Avout is working</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default About
