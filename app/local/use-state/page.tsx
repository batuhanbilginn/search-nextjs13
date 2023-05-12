"use client"

import { MOVIE_DATA } from "@/movies-data"
import { useCallback, useEffect, useState } from "react"

import MoviesList from "@/components/movies/movies-list"
import PageHero from "@/components/page-hero"
import SearchClient from "@/components/search/search-client"
import { siteConfig } from "@/config/site"

const Page = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [initialList] = useState(MOVIE_DATA)
  const [filteredList, setFilteredList] = useState(MOVIE_DATA)

  // Search Handler
  const searchHandler = useCallback(() => {
    const filteredData = initialList.filter((movie) => {
      return movie.title.toLowerCase().includes(inputValue.toLowerCase())
    })
    setFilteredList(filteredData)
  }, [initialList, inputValue])

  // EFFECT: Search Handler
  useEffect(() => {
    // Debounce search handler
    const timer = setTimeout(() => {
      searchHandler()
    }, 500)

    // Cleanup
    return () => {
      clearTimeout(timer)
    }
  }, [searchHandler])

  return (
    <div>
      {/* Hero */}
      <PageHero
        type="Local"
        title="Local Search with useState"
        description="Local search functionality with regular useState hook."
        prosandcons={siteConfig.pages.find((link) => link.id === 1)?.prosandcons}
      />
      {/* Search */}
      <SearchClient inputValue={inputValue} setInputValue={setInputValue} />
      {/* Producs */}
      <MoviesList movies={inputValue.length > 0 ? filteredList : initialList} />
    </div>
  )
}

export default Page
