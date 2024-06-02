import { LoginCard } from "@/components/LoginCard";

export default function LoginPage(){
    return(
        <>
        <main className="bg-slate-100 h-screen flex flex-col items-center">
        <div className="login-container h-screen w-3/4 flex flex-col justify-center items-center">
            <LoginCard/>
        </div>
        </main>
        </>
    )
}