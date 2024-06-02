"use client"

import { usePathname } from "next/navigation"
import Nav from "./Nav"

export function ConditionalNav(){
    const pathname = usePathname()
    const showNav = !pathname.startsWith('/stories') && pathname !== '/Login'
    return(
        <>
        {showNav && <Nav />}
        </>
    )
}