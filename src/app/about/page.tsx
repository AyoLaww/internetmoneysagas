import { PageTitle } from "@/components/PageTitle";

export default function aboutPage(){
    return(
        <main className="bg-slate-100 h-screen flex flex-col gap-20">
            <PageTitle title="About"/>

            <div className="about-container text-xl h-full flex flex-col items-center">
                <p className="pl-16 leading-8 text-xl">
                Hey there! Welcome to Internet Money Sagas. If you are anything like me, <br /> you love reading about successful startups and getting inspired by the <br /> stories  of those who have made it big online. This website is a product <br /> of my passion for entrepreneurship and my obsession with learning from <br /> the best in the business.
                <br />
                <br />
                I created Internet Money Sagas to share the incredible stories I come <br /> across and  to help others like me who are looking for that spark of <br /> inspiration. I believe that understanding the journeys of successful <br /> entrepreneurs can provide invaluable insights and motivation for anyone <br /> looking to start their own online business.
                </p>
            </div>
        </main>
    )
}