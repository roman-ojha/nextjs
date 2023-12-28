"use client";
// Error components must be client components

// Exporting error component
// If we will add error component then only the routes component that is effect by the error will get replaced
// And in this case if './page.tsx' raise an error in that case it will get replace by this component
// How it works: https://nextjs.org/docs/app/building-your-application/routing/error-handling#how-errorjs-works
// Component Hierarchy: https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fnested-error-component-hierarchy.png&w=1920&q=75&dpl=dpl_BgDMtkMC7Ys3CBykeL1toqez4tqp
export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <>
      <p>{error.message}</p>
    </>
  );
}
