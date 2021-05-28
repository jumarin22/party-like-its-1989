import React, { Component } from 'react'

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
      <div>
        {this.state.results.map(movie => {
          return (
            <div key={movie.id}>
              <p>{movie.title}</p>
              <img
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              ></img>
              <p>{movie.overview}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
