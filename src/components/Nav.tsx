import Link from "next/link";
import { Button } from "./ui/button";
import { DialogComponent } from "./SignUpDialogComponent";

export default function Nav(){
    return(
        <>
            <div className="nav-container bg-slate-100 flex flex-row justify-around py-5 border-b-2 border-black">
                <div className="logo-container">
                    <div className="font-bold text-xl mt-1">
                        <Link href="/">Internet Money Sagas</Link>
                    </div>
                </div>
                
                <div className="nav-items-container flex flex-row gap-7 items-center h-max">
                    <div className="text-black flex flex-row gap-5">
                        <Link href="/about" className="hover:cursor-pointer">About</Link>
                        <Link href="/Login" className="hover:cursor-pointer">Sign in</Link>
                    </div>

                    <div>
                        <DialogComponent 
                            title="Get Started"
                        />
                    </div>
                </div>
                
            </div>
        </>
    )
}