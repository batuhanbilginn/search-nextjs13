import { Movie } from "@/movies-data"

import { siteConfig } from "@/config/site"
import { supabaseClient } from "@/lib/utils"
import MoviesList from "@/components/movies/movies-list"
import PageHero from "@/components/page-hero"
import SearchServerParams from "@/components/search/search-server-params"

const Page = async ({
  searchParams,
}: {
  searchParams: { search?: string }
}) => {
  const searchQuery = searchParams.search ?? ""

  let movies: Movie[] = []

  // Get Initial Data
  const { data: initialMoviesData } = await supabaseClient
    .from("movies")
    .select("*")
    .returns<Movie[]>()

  // Search Function
  const { data: filteredMoviesData } = await supabaseClient
    .from("movies")
    .select("*")
    .textSearch("fts", searchQuery)
    .returns<Movie[]>()

  // If there is a search query, set movies to search results
  if (searchQuery.length > 0) {
    // If there is a result, set movies to result
    if (filteredMoviesData) {
      movies = filteredMoviesData
    }
    // If there is no result, set movies to empty array
    else {
      movies = []
    }
  }
  // If there is no search query, set movies to initial data
  else {
    movies = initialMoviesData ?? []
  }

  return (
    <div>
      {/* Hero */}
      <PageHero
        type="Server"
        title="Server-side Search with Search Params"
        description="Server-side search functionality with Search Params."
        prosandcons={
          siteConfig.pages.find((link) => link.id === 5)?.prosandcons
        }
      />
      {/* Search */}
      <SearchServerParams />
      {/* Producs */}
      <MoviesList movies={movies} />
    </div>
  )
}

export default Page
