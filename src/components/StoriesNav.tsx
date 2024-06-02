"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StoriesNav(){
    const pathname = usePathname()
    const showNav = pathname.startsWith('/stories') || pathname === '/Login'
    return(
        <>
            {showNav && <StoriesNavComponent />}
        </>
    )
}

export function StoriesNavComponent(){
    return(
        <>
        <div className="nav-container bg-slate-100 flex flex-row justify-center py-5 border-b-2 border-black">
            <div className="logo-container">
                <div className="font-bold text-xl">
                    <Link href="/">Internet Money Sagas</Link>
                </div>
            </div>
        </div>
        </>
    )
}