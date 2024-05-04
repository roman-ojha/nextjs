import fs from "fs";
export default function ServerComponentTwo() {
  // let's add a server only operation like a file system read in this component
  fs.readFileSync("src/components/server-component-two.tsx", "utf-8");
  return <h1>Server component 2</h1>;
}
