import StoriesNav from "@/components/StoriesNav";

export default function StoriesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <>
        <StoriesNav />
        { children }
        </>
    )
}