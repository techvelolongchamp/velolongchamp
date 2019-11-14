import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Benoit, a Freelance React and Nodejs Lead Developer and DevOps currently living in Paris, FR</h2>
      <p>
        This site was designed to simply test{' '}
        <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
          Gatsby
        </a>
        , a framework based on React and GraphQL to generate static websites.
      </p>
      <p>
        Of course, as it wasn't build for its content, there's not much of it on this site, for now at least{' '}
        <span role="img" aria-label="smiley">
          😉
        </span>
      </p>
      <p>
        If you wish to <Link to="/contact">contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
