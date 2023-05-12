import { revalidatePath } from "next/cache"
import { Movie } from "@/movies-data"

import { siteConfig } from "@/config/site"
import { supabaseClient } from "@/lib/utils"
import MoviesList from "@/components/movies/movies-list"
import PageHero from "@/components/page-hero"
import SearchServerActions from "@/components/search/search-server-actions"

let movies: Movie[] = []
const Page = async () => {
  // Get Initial Data
  const { data: initialMoviesData } = await supabaseClient
    .from("movies")
    .select("*")
    .returns<Movie[]>()

  // Search Handler
  const searchHandler = async (searchQuery: string) => {
    "use server"

    if (searchQuery.length > 0) {
      const { data: filteredMoviesData } = await supabaseClient
        .from("movies")
        .select("*")
        .textSearch("fts", searchQuery)
        .returns<Movie[]>()

      movies = filteredMoviesData ?? []
    } else {
      movies = initialMoviesData ?? []
    }

    revalidatePath("/server/server-actions")
  }

  // Deactivate search
  const deactivateSearch = async () => {
    "use server"
    movies = initialMoviesData ?? []
    revalidatePath("/server/server-actions")
  }

  return (
    <div>
      {/* Hero */}
      <PageHero
        type="Server"
        title="Server-side Search with Server Actions"
        description="Server-side search functionality with Next.js 13's Server Actions"
        prosandcons={
          siteConfig.pages.find((link) => link.id === 6)?.prosandcons
        }
      />
      {/* Search */}
      <SearchServerActions
        deactivateSearch={deactivateSearch}
        searchHandler={searchHandler}
      />
      {/* Movies */}
      <MoviesList movies={movies} />
    </div>
  )
}

export default Page
