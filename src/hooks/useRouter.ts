import { RouterContext } from "@helpers/context"
import { useContext } from "react"

export const useRouter = () => {
  const context = useContext(RouterContext)
  const navigate = context?.navigate

  if (!navigate) {
    throw new Error("navigate function is not available in RouterContext")
  }

  return { navigate }
}
