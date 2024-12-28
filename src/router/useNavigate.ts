import { RouterContext } from "@helpers/context"
import { useContext } from "react"

export const useNavigate = () => {
  const context = useContext(RouterContext)
  if (!context) throw new Error("Out of bounds")

  return context.navigate
}
