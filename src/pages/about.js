import React from 'react';
import { graphql } from 'gatsby';
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
export default function About({ data }) {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.title} About page</h1>
    </Layout>
  )
}