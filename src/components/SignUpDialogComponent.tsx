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
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export interface DialogComponentProps{
    title: string
}

export function DialogComponent({title}: DialogComponentProps) {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    useEffect(()=>{
        if(pathname.startsWith("/Login")){
            setOpen(false)
        }
    }, [pathname])


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
                <form action="">
                    <Input type="email" name="email" placeholder="Email" autoComplete="off" className="mt-5" />
                    <Input type="text" name="username" placeholder="Username" autoComplete="off" className="mt-5" />
                    <Input type="password" name="password" placeholder="Password" className="mt-5" />
                    
                    <div className="flex flex-row justify-end"><Button type="submit" className="mt-5">Sign up</Button></div>
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
