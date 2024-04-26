"use client";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  // An error component can use the reset() function to prompt the user to attempt to recover from the error. When executed, the function will try to re-render the Error boundary's contents. If successful, the fallback error component is replaced with the result of the re-render.
  return (
    <>
      <p>{error.message}</p>
      {/* NOTE: that to recover the error you have to convert our page.tsx to a client component as well*/}
      <button onClick={reset}>Try Again</button>
    </>
  );
}
