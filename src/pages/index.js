import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from "../components/Trips"
import Testimo from "../components/Testimo"
import Stats from "../components/Stats"
import Email from '../components/Email'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   <Hero />
   <Trips heading="Our Favorite Destinations"/>
   <Testimo />
   <Stats />
   <Email />
   
  </Layout>
)

export default IndexPage
