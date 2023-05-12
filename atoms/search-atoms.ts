import { MOVIE_DATA, Movie } from "@/movies-data"
import { atom } from "jotai"

export const inputAtom = atom<string>("")
export const moviesServerAtom = atom<Movie[]>([])
const moviesAtom = atom<Movie[]>(MOVIE_DATA)
export const filteredMoviesAtom = atom((get) => {
  const inputValue = get(inputAtom)
  // If there is no input value, return all movies
  if (!inputValue) return get(moviesAtom)

  // If there is an input value, filter movies by title
  return get(moviesAtom).filter((movie) =>
    movie.title.toLowerCase().includes(inputValue.toLowerCase())
  )
})
