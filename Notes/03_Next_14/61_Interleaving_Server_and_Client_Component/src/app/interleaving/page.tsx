import ClientComponentOne from "@/components/client-component-one";
import ServerComponentOne from "@/components/server-component-one";

export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving page</h1>
      {/* Now inside this server component let's invoke Server components 1, this should work fine */}
      {/* <ServerComponentOne /> */}

      {/* Now let's invoke client component 1 inside this server component, this should work fine */}
      {/* Explanation of why to pass server component inside the client component as a props is in here: '../component/client-component-one.tsx' */}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
