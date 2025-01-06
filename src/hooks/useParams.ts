import { RouterContext } from "@helpers/context"
import { useContext } from "react"

export const useParams = () => {
  const context = useContext(RouterContext)
  const params = context?.params

  if (!params) {
    throw new Error("useParams function is not available in RouterContext")
  }

  return params
}
