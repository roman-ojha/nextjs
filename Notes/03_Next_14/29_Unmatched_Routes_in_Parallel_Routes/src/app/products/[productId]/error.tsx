"use client";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <p>Product Page: {error.message}</p>
      <button onClick={reset}>Try Again</button>
    </>
  );
}
