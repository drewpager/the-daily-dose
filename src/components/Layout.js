import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import '../styles/tailwind.css';

export default function Layout({children}) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <header className="container p-8 mx-auto flex justify-between">
        <div className="w-48">
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 558 108" class="iconLeft"><path d="M117.096 28.724h35.84v8.292h-13.061v34.948h-9.718V37.016h-13.06v-8.292zm50.728 43.24h-9.272v-46.94l9.272-1.515v15.735q.936-.312 2.407-.58 1.471-.267 2.853-.267 3.968 0 6.642 1.07 2.63 1.115 4.235 3.076 1.605 2.006 2.273 4.77.624 2.719.624 6.107v18.544h-9.272v-17.43q0-4.502-1.159-6.374-1.159-1.872-4.279-1.872-1.248 0-2.362.222-1.07.223-1.962.49v24.964zm25.9-16.182q0-4.368 1.336-7.622 1.338-3.299 3.522-5.483 2.184-2.184 5.037-3.299 2.853-1.114 5.84-1.114 6.998 0 11.055 4.28 4.056 4.278 4.056 12.57 0 .802-.089 1.783-.045.936-.09 1.694h-21.128q.312 2.897 2.719 4.546 2.362 1.694 6.33 1.694 2.585 0 5.037-.445 2.451-.49 4.012-1.16l1.248 7.534q-.713.401-1.962.758-1.248.356-2.808.668-1.516.268-3.254.446-1.739.179-3.522.179-4.413 0-7.711-1.293-3.254-1.293-5.394-3.61-2.184-2.274-3.21-5.395-1.025-3.12-1.025-6.73zm9.539-3.566h12.303q-.045-1.159-.402-2.273-.356-1.16-1.07-2.006-.713-.892-1.782-1.427-1.115-.58-2.72-.58-1.56 0-2.674.536-1.16.535-1.872 1.382-.758.891-1.16 2.05-.4 1.16-.623 2.318zm53.803-15.512v27.325q.714.045 1.605.09.892.044 2.14.044 7.31 0 10.832-3.7 3.521-3.655 3.521-10.164 0-6.82-3.343-10.297-3.388-3.477-10.698-3.477h-2.05q-1.07.045-2.007.179zm28.173 13.595q0 5.617-1.783 9.807-1.739 4.19-4.948 6.91-3.21 2.763-7.846 4.145-4.591 1.337-10.342 1.337-2.63 0-6.106-.178-3.522-.223-6.865-.936V29.26q3.343-.624 6.998-.847 3.656-.223 6.286-.223 5.572 0 10.074 1.249 4.547 1.248 7.756 3.967 3.254 2.674 4.993 6.865 1.783 4.145 1.783 10.03zm20.015 15.156q1.381 0 2.63-.044 1.248-.09 2.006-.178v-7.088q-.58-.09-1.694-.223-1.115-.134-2.05-.134-1.338 0-2.497.134-1.16.178-2.006.624-.892.446-1.382 1.159-.49.758-.49 1.872 0 2.184 1.47 3.031 1.472.847 4.013.847zm-.758-27.191q4.145 0 6.865.936 2.763.936 4.413 2.674 1.649 1.739 2.318 4.235.713 2.496.713 5.572v19.346q-2.006.446-5.572 1.026-3.566.58-8.603.58-3.165 0-5.795-.536-2.586-.58-4.458-1.872-1.872-1.248-2.853-3.343-.98-2.05-.98-5.037 0-2.853 1.158-4.86 1.115-2.005 3.076-3.209 1.917-1.159 4.413-1.694 2.496-.534 5.171-.534 1.828 0 3.254.133 1.382.179 2.274.446v-.892q0-2.362-1.471-3.789-1.427-1.47-4.993-1.47-2.363 0-4.68.356-2.274.357-3.968.98l-1.203-7.488q.802-.268 2.05-.535 1.204-.267 2.63-.49 1.427-.223 3.031-.402 1.605-.133 3.21-.133zm32.006.847v32.853h-9.272V39.11h9.272zm.891-9.45q0 2.54-1.649 4.011-1.65 1.471-3.923 1.471-2.229 0-3.878-1.47-1.65-1.472-1.65-4.013 0-2.585 1.65-4.056t3.878-1.471q2.274 0 3.923 1.471 1.65 1.471 1.65 4.056zm22.289 35.26l-1.338 7.667q-4.056-.09-6.552-.892-2.541-.802-4.012-2.273-1.471-1.471-2.006-3.566-.535-2.096-.535-4.68V25.024l9.316-1.516v35.795q0 1.248.179 2.229.178.98.713 1.694.535.668 1.56 1.114.98.446 2.675.58zm24.829-25.81h9.628q-2.808 9.494-5.884 17.786-3.076 8.336-6.686 16.136-1.293 2.809-2.63 4.77-1.293 1.961-2.853 3.254-1.56 1.248-3.522 1.828-1.961.624-4.591.624-2.184 0-4.012-.401-1.872-.401-3.031-.936l1.604-7.4q1.427.49 2.586.669 1.114.178 2.362.178 2.497 0 3.834-1.337 1.337-1.338 2.273-3.7-3.165-6.241-6.374-13.997-3.165-7.801-5.973-17.474h9.851q.624 2.451 1.471 5.304.847 2.809 1.783 5.75.936 2.898 1.872 5.617.981 2.764 1.873 4.993.802-2.229 1.694-4.993.847-2.719 1.693-5.616.847-2.942 1.605-5.75.803-2.854 1.427-5.305zm39.94-2.407v27.325q.669.045 1.605.09.892.044 2.14.044 7.31 0 10.832-3.7 3.521-3.655 3.521-10.164 0-6.82-3.388-10.297-3.343-3.477-10.653-3.477h-2.05q-1.07.045-2.007.179zm28.128 13.595q0 5.617-1.738 9.807-1.739 4.19-4.948 6.91-3.21 2.763-7.846 4.145-4.591 1.337-10.342 1.337-2.63 0-6.107-.178-3.521-.223-6.864-.936V29.26q3.343-.624 6.998-.847 3.655-.223 6.285-.223 5.528 0 10.075 1.249 4.502 1.248 7.756 3.967 3.254 2.674 4.993 6.865 1.738 4.145 1.738 10.03zm38.202 5.171q0 3.878-1.114 7.088-1.115 3.21-3.254 5.483-2.095 2.273-5.082 3.521-2.942 1.249-6.642 1.249-3.61 0-6.597-1.249-2.942-1.248-5.082-3.521-2.095-2.274-3.299-5.483-1.203-3.21-1.203-7.088t1.248-7.043q1.203-3.165 3.343-5.438 2.184-2.229 5.126-3.477 2.987-1.248 6.464-1.248 3.566 0 6.508 1.248 2.987 1.248 5.082 3.477 2.14 2.273 3.343 5.438 1.16 3.165 1.16 7.043zm-9.495 0q0-4.28-1.694-6.775-1.738-2.452-4.903-2.452-3.165 0-4.948 2.452-1.738 2.496-1.738 6.775 0 4.324 1.738 6.82 1.783 2.541 4.948 2.541 3.165 0 4.903-2.54 1.694-2.497 1.694-6.82zm26.122 9.807q2.541 0 3.61-.49 1.07-.49 1.07-1.962 0-1.114-1.381-1.961-1.382-.847-4.19-1.872-2.185-.847-3.968-1.694-1.783-.892-3.03-2.095-1.249-1.204-1.918-2.898-.713-1.694-.713-4.056 0-4.636 3.432-7.31 3.433-2.675 9.45-2.675 2.987 0 5.751.535 2.72.535 4.369 1.159l-1.65 7.221q-1.605-.58-3.521-.98-1.917-.446-4.28-.446-4.368 0-4.368 2.407 0 .58.178 1.025.223.446.758.847.58.401 1.516.847.98.49 2.496 1.025 3.031 1.16 5.037 2.229 2.006 1.114 3.165 2.363 1.159 1.292 1.605 2.852.49 1.56.49 3.611 0 4.859-3.655 7.355-3.656 2.497-10.342 2.497-4.369 0-7.266-.714-2.897-.757-4.012-1.248l1.56-7.578q2.363.936 4.86 1.471 2.495.535 4.947.535zm19.257-9.495q0-4.368 1.338-7.622 1.337-3.299 3.521-5.483 2.184-2.184 5.037-3.299 2.853-1.114 5.84-1.114 6.998 0 11.055 4.28 4.056 4.278 4.056 12.57 0 .802-.089 1.783-.045.936-.09 1.694h-21.128q.312 2.897 2.719 4.546 2.362 1.694 6.33 1.694 2.585 0 5.037-.445 2.451-.49 4.012-1.16l1.248 7.534q-.713.401-1.962.758-1.248.356-2.808.668-1.515.268-3.254.446-1.738.179-3.522.179-4.413 0-7.667-1.293-3.298-1.293-5.438-3.61-2.184-2.274-3.21-5.395-1.025-3.12-1.025-6.73zm9.54-3.566h12.303q-.045-1.159-.401-2.273-.357-1.16-1.07-2.006-.714-.892-1.783-1.427-1.115-.58-2.72-.58-1.56 0-2.674.536-1.16.535-1.872 1.382-.758.891-1.16 2.05-.4 1.16-.623 2.318z" fill="#2F1911"/><defs><linearGradient gradientTransform="rotate(25)" id="a" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#b82949"/><stop offset="100%" stop-color="#e9b84c"/></linearGradient></defs><path d="M94.078 41.762c1.787-13.531-3.702-29.744-19.914-37.02-12.819-5.753-35.445-5.743-47.379 5.136-10.408 9.49-12.754 22.959-12.754 22.959s-1.074 5.004-1.074 6.665c0 1.588 1.788 2.213 1.583 3.029-.204.816-2.207 3.151-3.738 5.703-1.53 2.551-5.443 8.222-5.443 9.752s.916 2.097 2.753 2.709c1.836.612 3.265 1.122 3.571 1.836s-.875 2.754-.938 4.209c-.054 1.241.4 1.379 1.33 1.74 1.153.449 2.923.507 2.923.507s-3.943.745-3.551 2.359c.406 1.675 2.781 2.015 2.992 3.327.105.662-2.008 4.053-1.73 7.354.363 4.308 4.444 6.236 10.914 5.198 6.167-.99 9.067-1.91 9.86 1.491.499 2.141.446 5.753 1.364 9.836.038.163.077.338.114.51h47.327c-2.024-3.689-4.685-9.61-4.685-17.144 0-5.169.514-12.842 4.221-16.923 4.647-5.116 10.819-12.361 12.254-23.233zM74.537 52.486s-.619 6.769-5.588 7.639c-4.255.744-7.08-3.354-7.08-3.354l-1.398 6.613h-2.979s-2.701-9.966-4.564-11.644c-1.864-1.677-4.752-2.142-4.752-2.142s-3.912-.28-6.428-2.794c-2.515-2.516-.186-5.59-.186-5.59s-3.167.187-9.595-1.21c-6.427-1.398-4.471-5.497-4.471-5.497s-1.677.28-3.074-1.49c-.993-1.258-1.717-4.335.093-7.918 1.622-3.209 4.469-4.323 4.469-4.323s-1.054-1.338 1.169-3.207c1.161-.976 3.211-.947 3.211-.947s.501-2.151 3.587-3.546c3.496-1.579 5.822-.273 5.822-.273s.934-2.046 3.635-2.978c2.702-.931 5.4.649 5.4.649s1.828-1.653 5.182-1.653c3.353 0 4.601 1.747 4.601 1.747s2.02-1.038 4.471-.187c2.316.805 2.986 3.05 2.986 3.05s1.673-1.187 4-.255c2.329.932 3.262 3.447 3.262 3.447s1.605-.235 3.202 1.183c1.185 1.054.802 3.009.802 3.009s1.976.656 3.158 3.021c1.101 2.201-.456 4.059-.456 4.059s3.26 2.422 3.726 8.756c.568 7.728-4.377 9.222-4.377 9.222s.978 2.452-.746 5.123c-2.346 3.635-7.082 1.49-7.082 1.49z" transform="translate(-5.033 -.592) scale(1.09045)" fill="url(#a)"/></svg>
          </Link>
        </div>
        <div>
        <button class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Subscribe
        </button>
        </div>
      </header>
      <div className="container">
        {children}
      </div>
    </div>
  )
}
