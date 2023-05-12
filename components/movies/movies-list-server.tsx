"use client"

import { moviesServerAtom } from "@/atoms/search-atoms"
import { Movie } from "@/movies-data"
import { useAtomValue } from "jotai"

import MovieItem from "./movie-item"

const MoviesList = ({ intialMovies }: { intialMovies: Movie[] }) => {
  const movies = useAtomValue(moviesServerAtom)
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {movies.length > 0 ? (
        movies?.map((movie) => <MovieItem key={movie.id} movie={movie} />)
      ) : (
        <div>No result found for this query.</div>
      )}
    </div>
  )
}

export default MoviesList
