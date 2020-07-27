import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function MyFiles({ data }) {
  console.log(data);
  return (
    <Layout>
      <h1>All Files Page</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>VideoId</th>
              <th>Thumbnail</th>
            </tr>
          </thead>
          <tbody>
            {data.allYoutubeVideo.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.title}</td>
                <td><a href={`https://youtu.be/${node.videoId}`}>Video {index}</a></td>
                <td>{node.thumbnail.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allYoutubeVideo {
      edges {
        node {
          videoId
          title
          thumbnail {
            url
          }
          publishedAt(formatString: "")
          id
        }
      }
    }
  }
`