
interface PageTitleProps{
    title: string
}

export function PageTitle({ title }: PageTitleProps){
    return(
        <>
        
        <div className="header flex flex-row justify-center">
            <h1 className="text-7xl font-bold py-8">{ title }</h1>  
        </div>
        
        </>
    )
}