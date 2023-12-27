// Creating layout for the product detail page
// https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts
export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      {/* NOTE: that children props are all the component nested inside this route tree, like: reviews page as well */}
      <h1>Features products</h1>
    </>
  );
}
