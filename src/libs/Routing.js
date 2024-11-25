import { useLocation, useRoutes } from "react-router"
import { routes } from "../Routers"
import { useEffect } from "react"

export const Routing = () => {
    const route = useRoutes(routes)

    const {pathname} = useLocation()

    useEffect(()=>{
        window.scrollTo(0,0)

    },[pathname])

    return route
}