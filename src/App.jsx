import { useState, useEffect } from 'react'
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'
import './App.css'

function App() {
  // store movie data in state
  const [movie, setMovie] = useState(null)

  // get movie data
  const getMovie = async (searchTerm) => {
    try {
      console.log('searching for:', searchTerm)
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=98e3fb1f&t=${searchTerm}`
      )
      const data = await response.json()
      console.log('got movie:', data.Title)
      setMovie(data)
    } catch(e) {
      console.log('error:', e)
    }
  }

  // load initial movie
  useEffect(() => {
    getMovie("The Matrix")
  }, [])

  return (
    <div className="container">
      <h1>Movie Search</h1>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  )
}

export default App