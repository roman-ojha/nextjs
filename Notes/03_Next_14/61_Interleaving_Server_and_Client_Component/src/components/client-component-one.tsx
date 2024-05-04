"use client";

import { useState } from "react";
import ClientComponentTwo from "./client-component-two";
import ServerComponentOne from "./server-component-one";

// let's include a client only operation like use state call on this component

export default function ClientComponentOne({
  children,
}: {
  children: React.ReactNode;
}) {
  const [first, setName] = useState("Batman");
  return (
    <>
      <h1>Client component 1</h1>
      {/* Now here let's invoke client component two */}
      <ClientComponentTwo />

      {/* Now let's invoke server component inside the client component */}
      {/* https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components */}
      {/* WARNING: in this case we will going to see an error, because any component that is a server component nested inside the client component is automatically converted into a client component, since client component are rendered after the server component, we can't import server component into a client component module as it would require new request back to the server */}
      {/* <ServerComponentOne /> */}
      {/* So, now this 'ServerComponentOne' became a client component which will be executed on the client side, and all the server side logic, business logic will not going to run on client side and it would throw and error */}
      {/* However their is a workaround to solve this problem, instead of nesting server component into the client component, you can pass as a props to the client component, the common pattern will to be pass as a children props in your client component */}
      {/* https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#supported-pattern-passing-server-components-to-client-components-as-props */}
      {children}
    </>
  );
}
