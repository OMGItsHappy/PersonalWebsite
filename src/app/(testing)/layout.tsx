export default function Layout({
        children,
      }: {
        children: React.ReactNode
      }) 
{
    return (<>
    <html></html>
    <body>
        <div>{children}</div>
        </body>
    </>)
}