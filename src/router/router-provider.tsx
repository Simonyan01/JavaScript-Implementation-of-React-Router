/* eslint-disable react-hooks/exhaustive-deps */
import { RouterContext } from "@helpers/context"
import { IProviderProps } from "@helpers/types"
import { NotFound } from "@pages/not-found"
import { useEffect, useState } from "react"

export const RouterProvider: React.FC<IProviderProps> = ({ router }) => {
    const [currentView, setCurrentView] = useState<React.ReactNode | null>(null)
    const [currentPath, setCurrentPath] = useState<string>(location.pathname)
    const [routeParams, setRouteParams] = useState<Record<string, string | undefined>>({})

    const navigate = (path: string) => {
        history.pushState(null, "", path)
        setCurrentPath(path)
    }

    const params = () => routeParams

    useEffect(() => {
        const result = router.find(item => item.pattern?.test(currentPath))
        if (result) {
            setCurrentView(result.element)
        } else {
            setRouteParams({})
            setCurrentView(<NotFound />)
        }
    }, [currentPath])

    useEffect(() => {
        window.addEventListener("popstate", () => {
            setCurrentPath(location.pathname)
        })
    }, [])

    return (
        <RouterContext.Provider value={{ navigate, params }}>
            {currentView}
        </RouterContext.Provider>
    )
}