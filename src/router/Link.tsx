import { useNavigate } from "@hooks/useNavigate"
import { useEffect, useState } from "react"
import { ILink } from "@helpers/types"

export const Link: React.FC<ILink> = ({ to, children, target, className, ...props }) => {
    const [currentPath, setCurrentPath] = useState<string>(location.pathname)
    const navigate = useNavigate()

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        navigate(to)
    }

    useEffect(() => {
        const handlePopState = () => setCurrentPath(location.pathname)
        window.addEventListener("popstate", handlePopState)

        return () => window.removeEventListener("popstate", handlePopState)
    }, [currentPath])

    return (
        <a
            href={to}
            onClick={handleClick}
            target={target}
            className={className}
            {...props}
        >
            {children}
        </a>
    )
}