import { IFormContext, InputUser, IRouterContext } from "./types"
import { createContext } from "react"

export const RouterContext = createContext<IRouterContext | null>(null)
export const FormContext = createContext<IFormContext<InputUser> | null>(null)
