"use client"

import { useEffect, useState, useTransition } from "react"

import { Input } from "../ui/input"
import Spinner from "../ui/spinner"

const SearchServerActions = ({
  searchHandler,
  deactivateSearch,
}: {
  searchHandler: (searchQuery: string) => Promise<void>
  deactivateSearch: () => Promise<void>
}) => {
  const [inputValue, setInputValue] = useState<string>("")

  const [isPending, startTransition] = useTransition()

  const submitHandler = () => {
    startTransition(() => {
      searchHandler(inputValue)
    })
  }

  useEffect(() => {
    if (inputValue.length === 0) {
      startTransition(() => {
        deactivateSearch()
      })
    }
  }, [inputValue])

  return (
    <form action={submitHandler} className="relative mt-8 mb-5">
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
    </form>
  )
}

export default SearchServerActions
