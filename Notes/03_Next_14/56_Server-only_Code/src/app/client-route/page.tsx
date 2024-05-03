"use client";
// import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
  console.log("Client route rendered");
  // const result = serverSideFunction(); // here we are trying to use server side only function which could leads a security issues, performance reduce
  // so using 'server-only' package on the server only function it throws and error while build the application

  return (
    <>
      <h1>Client Route Page</h1>
      {/* {result} */}
    </>
  );
}
