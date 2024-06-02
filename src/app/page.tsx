import { DialogComponent } from "@/components/SignUpDialogComponent";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="bg-slate-100 flex flex-col justify-center items-center min-h-screen">
        <HomePageContent/>
      </main>
    </>
  )
}

export function HomePageContent(){
  return(
    <>
      <div className="conent-container">
          <h1 className="text-6xl font-black pb-8 text-violet-500">Internet Money $agas</h1>
          <h2 className="text-3xl pb-8">Uncover the blueprints for <span className="underline decoration-violet-500 decoration-4">7-figure online businesses</span> and ignite <br /> your entrepreneurial journey.</h2>
          <DialogComponent
            title="Start your journey"
          />
      </div>
    </>
  )
}
