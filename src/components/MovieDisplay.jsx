function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <div className="movie">
        <h2>{movie.Title}</h2>
        <h3>{movie.Year}</h3>
        <img 
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'} 
          alt={movie.Title} 
        />
        <h3>{movie.Genre}</h3>
        <p>{movie.Plot}</p>
      </div>
    )
  }

  const loading = () => {
    return <h2>Type a movie name to search...</h2>
  }

  return movie ? loaded() : loading()
}

export default MovieDisplay