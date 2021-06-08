import React from 'react'

const Movie = props => (
  <article key={props.obj.id}>
    <img
      className="poster"
      src={`https://image.tmdb.org/t/p/w185${props.obj.poster_path}`}
    ></img>
    <section>
      <h2 className="title">{props.obj.title}</h2>
      <p className="overview">{props.obj.overview}</p>
    </section>
  </article>
)

export default Movie
