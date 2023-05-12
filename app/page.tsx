import Link from "next/link"

import { siteConfig } from "@/config/site"

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

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          How to create Search Experience with Next.js 13
        </h1>
        <p className="max-w-[700px] text-lg text-neutral-600 dark:text-neutral-500 sm:text-xl">
          We will focus on 3 main approach to create search experience with
          Next.js:{" "}
          <span className="font-medium dark:text-neutral-400">Local</span>,{" "}
          <span className="font-medium dark:text-neutral-400">Client</span> and{" "}
          <span className="font-medium dark:text-neutral-400">Server</span>.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
        {siteConfig.pages.map((page) => (
          <Link
            key={page.id}
            rel="noreferrer"
            href={page.href}
            className="w-full px-8 py-6 transition-all duration-200 ease-in-out transform rounded-md dark:bg-black/40 bg-slate-100 hover:-translate-y-1 hover:-translate-x-1 hover:scale-105 hover:shadow-sm"
          >
            <div
              className={`${getTagBackground(
                page.category
              )} h-9 px-3 flex items-center justify-center leading-none font-medium text-sm rounded-md max-w-fit`}
            >
              {page.category}
            </div>
            <h2 className="mt-3 text-lg font-semibold">{page.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  )
}
