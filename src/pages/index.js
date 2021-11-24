// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>#
      <StaticImage 
        alt="loveit"
        src="https://i.ytimg.com/vi/xT04nnT17NA/hqdefault.jpg"
      />
    </Layout>
  )
}
export default IndexPage