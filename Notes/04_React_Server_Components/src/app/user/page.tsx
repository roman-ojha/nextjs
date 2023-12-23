import Button from "./Button";
import ServerButton from "./ButtonServer";

// Here this component is a server component which will get rendered inside the server and send the html & CSS into the client
export default function UserPage() {
  return (
    <div>
      <h1>User Page</h1>
      {/* <button
        // NOTE: if we want to add javascript or intractability inside the component then we have to convert this component into the client component
        // we can't use it inside server component
        // So, for this button we will going to create this button as a client component
        onClick={() => {
          console.log("");
        }}
      >
        Hello
      </button> */}
      <Button />
      <br />
      <ServerButton />
    </div>
  );
}
