"use client"

import { filteredMoviesAtom, inputAtom } from "@/atoms/search-atoms"
import { useAtom, useAtomValue } from "jotai"

import { siteConfig } from "@/config/site"
import MoviesList from "@/components/movies/movies-list"
import PageHero from "@/components/page-hero"
import SearchClient from "@/components/search/search-client"

const Page = () => {
  const [inputValue, setInputValue] = useAtom(inputAtom)
  const movies = useAtomValue(filteredMoviesAtom)

  return (
    <div>
      {/* Hero */}
      <PageHero
        type="Local"
        title="Local Search with Jotai"
        description="Local search functionality with Jotai."
        prosandcons={
          siteConfig.pages.find((link) => link.id === 2)?.prosandcons
        }
      />
      {/* Search */}
      <SearchClient inputValue={inputValue} setInputValue={setInputValue} />
      {/* Producs */}
      <MoviesList movies={movies} />
    </div>
  )
}

export default Page
