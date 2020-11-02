import React, { useEffect, useState } from 'react'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

export const MovieList = ({apiKey, configuration}) => {
  const [movies, setMovies] = useState([])
  const [imageSource, setImageSource] = useState('')
  const MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=de-DE&sort_by=popularity.desc&with_original_language=de`

  useEffect(() => {
    fetch(MOVIES_URL)
    .then(res => res.json())
    .then(json => (
      setMovies(json.results),
      setImageSource(`${configuration.base_url}${configuration.poster_sizes[5]}`)
    ))
  }, [])

  console.log(movies)
  console.log(configuration.poster_sizes)

  return (
    <>
      <Header />
      <section>
        {movies.map((movie) => (
          <img src={`imageSource${movie.poster_path}`}/>
        ))}
      </section>
    </>
  )
}