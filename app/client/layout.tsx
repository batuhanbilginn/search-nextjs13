import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="container py-8">{children}</div>
}

export default Layout
