
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

export function LoginCard() {
  return (
    <>
      <Card className="w-96 h-1/2">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
        <form action="">
                    <Input type="email" name="email" placeholder="Email" autoComplete="off" className="mt-5" />
                    <Input type="text" name="username" placeholder="Username" autoComplete="off" className="mt-5" />
                    <Input type="password" name="password" placeholder="Password" className="mt-5" />
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
