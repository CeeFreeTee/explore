import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const DoNotDoIt = () => {
    return (
      <Layout pageTitle="She fell over and they helped her up.">
        <p>If you laugh we know you know what this is from...</p>
        <StaticImage
        alt="I'M SORRY FOR MY ACTIONS"
        src="https://i.ytimg.com/vi/xT04nnT17NA/mqdefault.jpg"
      />
      </Layout>
      
    )
  }
  export default DoNotDoIt