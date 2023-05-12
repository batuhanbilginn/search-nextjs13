"use client"

import { useEffect, useState } from "react"
import { MOVIE_DATA, Movie } from "@/movies-data"
import { useQuery } from "@tanstack/react-query"

import { siteConfig } from "@/config/site"
import { supabaseClient } from "@/lib/utils"
import MoviesList from "@/components/movies/movies-list"
import PageHero from "@/components/page-hero"
import SearchClient from "@/components/search/search-client"

const Page = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [debouncedValue, setDebouncedValue] = useState<string>("")
  const [movies, setMovies] = useState<Movie[]>(MOVIE_DATA)

  // Fetcher
  const fetcher = async (query: string) => {
    const { data: movies, error } = await supabaseClient
      .from("movies")
      .select("*")
      .textSearch("fts", query)
      .returns<Movie[]>()

    if (error) {
      throw error
    } else {
      return movies
    }
  }

  // Queries
  const query = useQuery({
    queryKey: [debouncedValue],
    queryFn: async (query) => fetcher(query.queryKey[0]),
    enabled: debouncedValue.length > 0,
  })

  // EFFECTS: Set Data
  useEffect(() => {
    // If search is active, set movies to search results
    if (debouncedValue.length > 0) {
      // If there is a result, set movies to result
      if (query.data) {
        setMovies(query.data)
      }
      // If there is no result, set movies to empty array
      else {
        setMovies([])
      }
    }
    // If search is not active, set movies to initial data
    else {
      setMovies(MOVIE_DATA)
    }
  }, [query.data, debouncedValue])

  // EFFECT: Debounce Input Value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [inputValue])

  return (
    <div>
      {/* Hero */}
      <PageHero
        type="Client"
        title="Client-side Search with useQuery"
        description="Client-side search functionality with Tanstack's Query library."
        prosandcons={
          siteConfig.pages.find((link) => link.id === 4)?.prosandcons
        }
      />
      {/* Search */}
      <SearchClient inputValue={inputValue} setInputValue={setInputValue} />
      {/* Producs */}

      <MoviesList movies={movies} isHandling={query.isFetching} />
    </div>
  )
}

export default Page
