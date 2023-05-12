export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Search with Next.js 13",
  description: "Demonstrating how to build a search experience with Next.js 13",
  pages: [
    {
      id: 1,
      category: "Local",
      title: "Local Search with useState",
      href: "/local/use-state",
      prosandcons: [
        { type: "pro", text: "Easy to implement" },
        { type: "pro", text: "No dependency" },
        { type: "con", text: "Props drillig and extra re-renders" },
        { type: "con", text: "Require to load all data initially" },
        { type: "con", text: "Not scalable for large data" },
      ],
    },
    {
      id: 2,
      category: "Local",
      title: "Local Search with Jotai",
      href: "/local/jotai",
      prosandcons: [
        { type: "pro", text: "Easy to understand" },
        {
          type: "pro",
          text: "Performant (No-rerender issue & No props drilling)",
        },
        { type: "con", text: "Needs extra dependency" },
        { type: "con", text: "Require to load all data initially" },
        { type: "con", text: "Not scalable for large data" },
      ],
    },
    {
      id: 3,
      category: "Client",
      title: "Client-side Search with SWR",
      href: "/client/swr",
      prosandcons: [
        { type: "pro", text: "Good UX" },
        {
          type: "pro",
          text: "Caching mechanism",
        },
        { type: "con", text: "Extra JS load for client" },
      ],
    },
    {
      id: 4,
      category: "Client",
      title: "Client-side Search with useQuery",
      href: "/client/use-query",
      prosandcons: [
        { type: "pro", text: "Good UX" },
        {
          type: "pro",
          text: "Caching mechanism",
        },
        { type: "con", text: "Extra JS load for client" },
      ],
    },
    {
      id: 5,
      category: "Server",
      title: "Server-side Search with Search Params",
      href: "/server/search-params",
      prosandcons: [
        { type: "pro", text: "More secure!" },
        {
          type: "pro",
          text: "Caching mechanism (Vercel)",
        },
        {
          type: "pro",
          text: "Shareable URLs",
        },
        { type: "con", text: "Hard to implement" },
      ],
    },
    {
      id: 6,
      category: "Server",
      title: "Server-side Search with Next.js 13's Server Actions",
      href: "/server/server-actions",
      prosandcons: [
        { type: "pro", text: "More secure!" },
        {
          type: "pro",
          text: "Caching mechanism (Vercel)",
        },
        {
          type: "con",
          text: "Bad UX (No loading indicator & Slow response)",
        },
        { type: "con", text: "Hard to implement (Overkill for search)" },
      ],
    },
  ],
  links: {
    twitter: "https://twitter.com/makrdev",
    github: "https://github.com/batuhanbilginn",
  },
}
