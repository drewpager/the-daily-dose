import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default function HeaderImage() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "headers/profile.png" }) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img 
      fluid={data.file.childImageSharp.fluid} 
      className="h-64 w-64 shadow-lg"
      />
  )
}