// Server Components can use the inline function level or module level "use server" directive. To inline a Server Action, add "use server" to the top of the function body:
import { createUserUsingFormData, createUser } from "@/server-action";
import ClientButton from "@/components/ClientButton";

// Server Component
export default function ServerPage() {
  // Server Action
  async function displayLog() {
    // creating server action inside the server component
    "use server";
    console.log("Server action from the server component");
    return "hello world";
  }
  return (
    <>
      <h1>Server component page</h1>
      <ClientButton displayLog={displayLog} />
      <form action={displayLog}>
        <input type="submit" value="display" />
      </form>
    </>
  );
}
