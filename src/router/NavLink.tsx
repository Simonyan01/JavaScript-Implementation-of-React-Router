import { useRouter } from "@hooks/useRouter"
import { useState, useEffect } from "react"
import { ILink } from "@helpers/types"


export const NavLink: React.FC<ILink> = ({ to, children, className, ...props }) => {
    const { navigate } = useRouter()
    const [currentPath, setCurrentPath] = useState<string>(location.pathname)

    const isActive = currentPath === to

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        navigate(to)
    }

    useEffect(() => {
        const handlePopState = () => setCurrentPath(location.pathname)
        window.addEventListener("popstate", handlePopState)

        return () => {
            window.removeEventListener("popstate", handlePopState)
        }
    }, [currentPath])

    return (
        <a
            href={to}
            onClick={handleClick}
            className={`${className} ${isActive ? "active" : ""}`}
            {...props}
        >
            {children}
        </a>
    )
}
