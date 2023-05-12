import { CheckCircle2, X } from "lucide-react"

import { ProsAndCons } from "@/types/nav"

const ProsAndConsItem = ({ item }: { item: ProsAndCons }) => {
  return (
    <div className="flex items-center gap-1 text-xs rounded-md whitespace-nowrap">
      <div>
        {item.type === "pro" ? <CheckCircle2 size="12" /> : <X size="12" />}
      </div>
      <div>{item.text}</div>
    </div>
  )
}

export default ProsAndConsItem
