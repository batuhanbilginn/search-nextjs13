import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { ProsAndCons } from "@/types/nav"

import { buttonVariants } from "./ui/button"
import ProsAndConsItem from "./ui/prosandcons-item"

const getTagBackground = (type: string) => {
  switch (type) {
    case "Local":
      return "dark:bg-emerald-900/20 bg-emerald-900/10 text-emerald-900"
    case "Client":
      return "dark:bg-yellow-900/20 bg-yellow-900/10 text-yellow-900"
    case "Server":
      return "dark:bg-blue-900/20 bg-blue-900/10 text-blue-900"
  }
}

interface Props {
  type: "Local" | "Client" | "Server"
  title: string
  description: string
  prosandcons?: ProsAndCons[] | undefined
}
const PageHero = ({ type, title, description, prosandcons }: Props) => {
  return (
    <div className="pb-5 mt-10 mb-5 border-b border-dashed border-slate-100 dark:border-slate-600">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <div className="flex items-center gap-3">
          {/* Back Arrow */}
          <Link
            className={buttonVariants({ variant: "secondary", size: "sm" })}
            href="/"
          >
            <ArrowLeft size="14" />
          </Link>
          <div
            className={`${getTagBackground(
              type
            )} h-9 px-3 flex items-center justify-center leading-none font-medium rounded-md`}
          >
            {type}
          </div>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-[700px] text-lg text-slate-600 dark:text-neutral-500 sm:text-xl">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 mt-2">
          {prosandcons?.map((item) => (
            <ProsAndConsItem item={item} key={item.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PageHero
