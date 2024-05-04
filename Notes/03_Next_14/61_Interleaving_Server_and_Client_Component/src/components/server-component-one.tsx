import fs from "fs";
import ServerComponentTwo from "./server-component-two";
import ClientComponentOne from "./client-component-one";

export default function ServerComponentOne() {
  // let's add a server only operation like a file system read in this component
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
  return (
    <>
      <h1>Server component 1</h1>
      {/* Let's invoke 'ServerComponentTwo' inside this server component 1 this should work fine */}
      <ServerComponentTwo />

      {/* Let's invoke client component inside the server component  this should work fine*/}
      {/* <ClientComponentOne /> */}
    </>
  );
}
