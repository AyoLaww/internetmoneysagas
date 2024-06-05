"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { FormEvent, useEffect, useState } from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/clients/supabase";


export interface DialogComponentProps{
    title: string
}

export function DialogComponent({title}: DialogComponentProps) {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    useEffect(()=>{
        if(pathname.startsWith("/Login")){
            setOpen(false)
        }
    }, [pathname])


    const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      
      const form = e.currentTarget
      const email = (document.getElementById('email') as HTMLInputElement).value
      const password = (document.getElementById('password') as HTMLInputElement).value
      const username = (document.getElementById('username') as HTMLInputElement).value

      const {data, error: signUpError} = await supabase.auth.signUp({
        email, 
        password
      })

      if(signUpError){
        console.error('Error signing up:', signUpError)
        return
      }

      if(data.user) {
        const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          { id: data.user.id, email, username }
        ])

        if(profileError){
          console.error('Error creating Profile:', profileError)
        } else {
          console.log("user created")
          router.push('/stories')
        }
      }
      }

      


  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button onClick={() => setOpen(true)}>{title}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogDescription>
                <form onSubmit={handleSignUp}>
                    <Input type="email" name="email" id="email" placeholder="Email" autoComplete="off" className="mt-5" />
                    <Input type="text" name="username" id="username" placeholder="Username" autoComplete="off" className="mt-5" />
                    <Input type="password" name="password" id="password" placeholder="Password" className="mt-5" />
                    
                    <div className="flex flex-row justify-end"><Button className="mt-5"><input type="submit" value="Sign Up" /></Button></div>
                </form>
                <div className="mt-5 flex flex-row justify-center">
                    <Link href="/Login" className="hover:underline underline-offset-1">Already have an account ?</Link>
                </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
