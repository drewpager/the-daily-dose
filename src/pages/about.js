import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import HeaderImage from '../components/Header';

export default function About({ fluid } = HeaderImage) {
  return (
    <Layout>
      <h1>About page</h1>
      <HeaderImage 
        fluid={fluid}
        />
    </Layout>
  )
}
