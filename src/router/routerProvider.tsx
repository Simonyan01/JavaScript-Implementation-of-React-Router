/* eslint-disable react-hooks/exhaustive-deps */
import { RouterContext } from "@helpers/context"
import { IProviderProps } from "@helpers/types"
import { useEffect, useState } from "react"
import { NotFound } from "@pages/NotFound"

export const RouterProvider: React.FC<IProviderProps> = ({ router }) => {
    const [currentView, setCurrentView] = useState<React.ReactNode | null>(null)
    const [currentPath, setCurrentPath] = useState<string>(location.pathname)

    const navigate = (path: string) => {
        history.pushState(null, "", path)
        setCurrentPath(path)
    }

    useEffect(() => {
        const result = router.find(item => item.pattern?.test(currentPath))
        if (result) {
            setCurrentView(result.element)
        } else {
            setCurrentView(<NotFound />)
        }
    }, [currentPath])

    useEffect(() => {
        window.addEventListener("popstate", () => {
            setCurrentPath(location.pathname)
        })
    }, [])

    return (
        <RouterContext.Provider value={{ navigate }}>
            {currentView}
        </RouterContext.Provider>
    )
}