"use client"

import { useCallback, useEffect, useState, useTransition } from "react"
import { usePathname, useRouter } from "next/navigation"

import { Input } from "../ui/input"
import Spinner from "../ui/spinner"

const SearchServerParams = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [debouncedValue, setDebouncedValue] = useState<string>("")
  const [mounted, setMounted] = useState<boolean>(false)
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleSearchParams = useCallback(
    (debouncedValue: string) => {
      let params = new URLSearchParams(window.location.search)
      if (debouncedValue.length > 0) {
        params.set("search", debouncedValue)
      } else {
        params.delete("search")
      }
      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`)
      })
    },
    [pathname, router]
  )

  // EFFECT: Set Initial Params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const searchQuery = params.get("search") ?? ""
    setInputValue(searchQuery)
  }, [])

  // EFFECT: Set Mounted
  useEffect(() => {
    if (debouncedValue.length > 0 && !mounted) {
      setMounted(true)
    }
  }, [debouncedValue, mounted])

  // EFFECT: Debounce Input Value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [inputValue])

  // EFFECT: Search Params
  useEffect(() => {
    if (mounted) handleSearchParams(debouncedValue)
  }, [debouncedValue, handleSearchParams, mounted])

  return (
    <div className="relative mt-8 mb-5">
      <Input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        placeholder="Search movies"
        className="text-base"
      />
      {isPending && (
        <div className="absolute top-2 right-2">
          <Spinner />
        </div>
      )}
    </div>
  )
}

export default SearchServerParams
