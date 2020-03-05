import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navbar from '../components/Navbar'

const IndexPage = () => (
  <Layout>
    <SEO title="Home"
         description="Hello there! I am Matthew Ishii. I am a Software Engineer that enjoys approaching modern problems and changing them to modern solutions. Check out my projects and blog!"
         canonical="https://mishiitech.com/"
    />
    
    <Navbar/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
