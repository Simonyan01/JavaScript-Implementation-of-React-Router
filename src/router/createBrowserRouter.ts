import { IRoute } from "@helpers/types"

export const createBrowserRouter = (routes: IRoute[]): IRoute[] => {
  return routes.map((route) => {
    route.pattern = new RegExp(`^${route.path.replace(/:(\w+)/g, "([^/]+)")}$`)

    return route
  })
}
