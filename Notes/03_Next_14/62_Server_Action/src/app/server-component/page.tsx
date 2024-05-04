// Server Components can use the inline function level or module level "use server" directive. To inline a Server Action, add "use server" to the top of the function body:

// Server Component
export default function Page() {
  // Server Action
  async function create() {
    "use server";

    // ...
  }
  return (
    <>
      <h1>Server component</h1>
    </>
  );
}
