import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function Home({ data }) {
  return (
    <Layout>
      <div className="sm:block mx-automd:container mx-auto flex justify-center items-center">
        <div className="p-16">
          <h1 className="text-6xl">The Daily Dose</h1>
          <h3 className="ml-3">Insights in 3 Minutes Tight</h3>
          <form 
            className="w-full max-w-sm mt-8"
            method="PUT"
            action="https://api.sendgrid.com/v3/marketing/contacts"
            list_ids="03df10cd-03e9-4ce9-ac6f-8b4a3c4179f8"
          >
          <div className="flex items-center border-b border-b-2 border-orange-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
              type="text" 
              placeholder="jane@doe.com" 
              aria-label="Email"/>
            <button className="flex-shrink-0 bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
              Sign Up
            </button>
          </div>
        </form>
        </div>
        <div className="p-16">
        <svg className="w-64" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 885.619 579.765">
            <path fill="#e6e6e6" d="M.261.346h610.532v391.012H.261z"/>
            <path fill="#fff" d="M17.719 49.389h575.616v318.837H17.719z"/>
            <path fill="#d2691e" d="M0 0h610.532v25.938H0z"/>
            <circle cx="19.275" cy="13.261" r="4.807" fill="#fff"/>
            <circle cx="37.522" cy="13.261" r="4.807" fill="#fff"/>
            <circle cx="55.77" cy="13.261" r="4.807" fill="#fff"/>
            <path fill="#d2691e" d="M66.692 98.34h325.756v183.238H66.692z"/>
            <path fill="#e6e6e6" d="M437.903 98.34h124.052v69.78H437.903zM437.903 190.195h124.052v69.78H437.903zM437.903 282.051h124.052v69.78H437.903zM66.692 312.354h224.431v15.151H66.692z"/>
            <path fill="#fff" d="M272.184 189.959l-71.023-41.005v82.009l71.023-41.004-71.023-41.005v82.009l71.023-41.004z"/>
            <path fill="#ffb8b8" d="M729.361 539.637l2.918 14.588-14.588 2.918 2.188-18.236 9.482.73zM789.076 536.983l-3.304 16.519-13.59.328 4.339-20.151 12.555 3.304z"/>
            <path d="M810.739 367.278l3.788 25.568s-3.788 56.818-4.735 59.659-3.788 17.045-3.788 17.045l-16.099 68.182s-13.936 1.894-16.777-5.682l.679-40.72-.947-46.4-11.364-53.031-19.886 71.97s-.947 23.674-3.788 32.196-6.628 45.455-6.628 45.455-12.043 2.84-12.99 0-5.95-70.076-5.95-80.492-5.567-110.295-5.567-110.295zM776.546 552.56a11.749 11.749 0 004.731 0c1.775-.592 0-4.14 0-4.14h6.506s7.097 15.968 10.054 17.15 12.42 14.195 1.183 14.195a36.719 36.719 0 01-19.517-5.914s-1.183-5.323-6.506-5.914-8.87-7.097-8.87-7.097l5.776-10.666a1.913 1.913 0 013.355-.007c.803 1.42 1.919 2.667 3.288 2.393zM727.048 550.728s-1.32 2.638-2.639 1.319a18.07 18.07 0 01-2.638-4.617s-3.957-1.979-4.617 0-3.298 12.532-4.617 13.85-15.17 15.17-1.319 17.809 16.49-3.298 16.49-3.298-1.98-3.298 1.978-4.617 4.617-5.936 4.617-5.936l-1.988-14.907a1.615 1.615 0 00-2.895-.747c-.764.997-1.616 1.648-2.372 1.144z" fill="#2f2e41"/>
            <path d="M832.519 300.99l2.84 49.243s13.258 31.25-4.734 30.302-6.629-31.25-6.629-31.25l-17.616-43.948zM686.686 286.786l-2.84 49.242s-13.258 31.25 4.734 30.303 6.629-31.25 6.629-31.25l17.616-43.948z" fill="#ffb8b8"/>
            <circle cx="762.443" cy="155.158" r="24.621" fill="#ffb8b8"/>
            <path d="M781.856 165.1s-6.629 26.516 6.629 33.145-41.666 16.098-45.454 0l1.894-7.576s7.575-9.47 5.681-17.992z" fill="#ffb8b8"/>
            <path d="M767.178 198.718s-16.34 1.526-21.427-9.18c0 0-38.232 2.551-46.754 37.589 9.89.283 22.16 112.835 5.95 124.053-13.159 9.105 22.706 23.13 72.648 23.674l37.879-1.894c-7.063-6.085-23.964-85.272-13.258-84.28 0 0 28.409-44.508 25.568-51.136s-7.39-32.766-43.941-43.372c0 0-.566 5.493-16.665 4.546z" fill="#e6e6e6"/>
            <path d="M815.474 221.445l12.31 16.099s12.31 67.234 8.523 68.181-26.515 8.523-30.303 5.682-20.833-58.712-20.833-58.712zM715.095 216.71l-16.098 10.417s-23.674 66.288-17.046 69.128 43.56.947 43.56.947z" fill="#e6e6e6"/>
            <path d="M789.356 133.124s-8.528-18.478-24.874-14.214-25.584 10.66-26.294 17.056.355 15.99.355 15.99 1.777-13.147 13.147-10.304 29.138.71 29.138.71l2.843 25.585s3.198-4.62 6.751-1.777 10.305-27.361-1.066-33.046z" fill="#2f2e41"/>
            <path fill="#3f3d56" d="M885.258 579.242H641.189v-1.995h244.43l-.361 1.995z"/>
          </svg>
        </div>
      </div>
      {data.allYoutubeVideo.edges.forEach(i => (
        <div className="container mx-auto">
          <p className="text-2xl">{i.node.title}</p>
          <img className="w-15 p-10" src={i.node.thumbnail.url} alt="soda can"/>
        </div>
      ))}     
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
