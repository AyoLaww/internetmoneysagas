"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { FormEvent } from "react";
import { supabase } from "@/lib/clients/supabase";
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";

export function LoginCard() {
  const router = useRouter()

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = (document.getElementById('login-email') as HTMLInputElement).value
    const password = (document.getElementById('login-password') as HTMLInputElement).value

    const { data, error: loginError} = await supabase.auth.signInWithPassword({
      email, 
      password
    })

    if(loginError){
      console.log('Error logging in:', loginError.message)
    }

    if(data.user){
      console.log("User logged in")
      router.push('/stories')
    }
  }


  return (
    <>
      <Card className="w-96 h-1/2">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
        <form onSubmit={handleLogin}>
                    <Input type="email" name="email" id="login-email" placeholder="Email" autoComplete="off" className="mt-5" />
                    <Input type="password" name="password" placeholder="Password" id="login-password" className="mt-5" />
                    <div className="w-full mt-5 flex flex-row justify-between">
                      <Link href="#" className="hover:underline underline-offset-1 mt-3 text-sm">Forgot Password ?</Link>
                      <Button type="submit" className="self-end">Login</Button>
                    </div>    
                </form>
                <div className="mt-9 flex flex-row justify-center text-slate-400">
                    <Link href="/" className="text-sm hover:underline underline-offset-1">Dont have an account ?</Link>
                </div>
        </CardContent>
      </Card>
    </>
  );
}
