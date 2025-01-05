import { RouterContext } from "@helpers/context"
import { useContext } from "react"

export const useNavigate = () => {
  const context = useContext(RouterContext)
  const navigate = context?.navigate

  if (!navigate) {
    throw new Error("Navigate function is not available in RouterContext")
  }

  return navigate
}
