import Image from "next/image"
import { Movie } from "@/movies-data"

const MovieItem = ({ movie }: { movie: Movie }) => {
  return (
    <div className="relative overflow-hidden rounded-md shadow-sm h-96">
      {/* Content */}
      <div className="relative z-20 flex flex-col justify-end w-full h-full px-4 pb-10">
        <div className="flex items-center gap-2 ">
          <div className="inline-block px-2 py-1 text-xs rounded-md line-clamp-1 bg-yellow-100/80 text-slate-900">
            {movie.rating}
          </div>
          <div className="inline-block px-2 py-1 text-xs rounded-md line-clamp-1 bg-slate-800/80 text-slate-200">
            {movie.type.toUpperCase()}
          </div>
          <div className="inline-block px-2 py-1 text-xs rounded-md line-clamp-1 bg-slate-800/80 text-slate-200">
            {movie.genre.toUpperCase()}
          </div>
        </div>
        <h2 className="mt-2 text-2xl font-semibold dark:text-slate-200">
          {movie.title}
        </h2>
        <p className="text-sm dark:text-slate-400 line-clamp-2">{movie.plot}</p>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 z-10 rounded-md bg-gradient-to-b dark:from-slate-900/30 dark:via-slate-900/90 dark:to-slate-900 from-white/30 via-white/90 to-white" />
      {/* BG Image */}
      <Image
        className="object-cover object-center pb-1 rounded-md"
        src={movie.image}
        fill
        alt={movie.title}
      />
    </div>
  )
}

export default MovieItem
