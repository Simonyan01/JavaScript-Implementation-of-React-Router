import { createContext } from "react"
import { IContext } from "./types"

export const RouterContext = createContext<IContext | null>(null)
