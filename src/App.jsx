import React, { Component } from 'react'
import Header from './components/Header'
import Movie from './components/Movie'
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
            return <Movie obj={movie} />
          })}
        </div>
      </div>
    )
  }
}
