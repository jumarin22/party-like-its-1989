import React, { Component } from 'react'
import Header from './components/Header'
import background from './seamless-background-80s11-.jpg'

export class App extends Component {
  state = {
    results: [],
  }

  fetchData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=afd975396a0441c3efd7403c3d3856d4'
    )
    const data = await response.json()
    this.setState({ results: data.results })
    console.log(data)
    console.log(this.state.results)
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div style={{ backgroundImage: `url(${background})` }}>
        <Header />
        <div className="main">
          {this.state.results.map(movie => {
            return (
              <article key={movie.id}>
                <img
                  className="poster"
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                ></img>
                <section>
                  <h2 className="title">{movie.title}</h2>
                  <p className="overview">{movie.overview}</p>
                </section>
              </article>
            )
          })}
        </div>
      </div>
    )
  }
}
