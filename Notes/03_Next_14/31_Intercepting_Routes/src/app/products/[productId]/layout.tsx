function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    // throwing an error, creating a run time error
    throw new Error("Error loading product");
  }
  // The error boundary './error.tsx' will not catch the error throw on './layout.tsx' component rather we have to move './error.tsx' file into it's parent segments '../error.tsx'
  return (
    <>
      {children}
      <h1>Features products</h1>
    </>
  );
}
