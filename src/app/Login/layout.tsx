import StoriesNav from "@/components/StoriesNav";

export default function LoginLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <>
        <StoriesNav/>
        { children }
        </>
    )
}