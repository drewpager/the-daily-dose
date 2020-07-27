import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default function Home({ data }) {
  return (
    <Layout>
      <div className="font-sans text-lg text-blue-800 p-8">
        <h1>{data.site.siteMetadata.title} Homepage</h1>
      </div>
    </Layout>
  )
}