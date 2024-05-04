"use client";

import { useState } from "react";

const ClientComponent = ({
  createUserUsingFormData,
  createUser,
}: {
  createUserUsingFormData: (e: FormData) => Promise<string>;
  createUser: (email: string, password: string) => Promise<string>;
}) => {
  /*
    Server actions can be invoked using the action attribute in a <form> element:
    Server Components support progressive enhancement by default, meaning the form will be submitted even if JavaScript hasn't loaded yet or is disabled.
    In Client Components, forms invoking Server Actions will queue submissions if JavaScript isn't loaded yet, prioritizing client hydration.
    After hydration, the browser does not refresh on form submission.
  */
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Behind the scenes, actions use the POST method, and only this HTTP method can invoke them.
  return (
    <>
      <form action={createUserUsingFormData}>
        <input type="text" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="create" />
      </form>

      <form>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => {
            setUser({
              email: e.target.value,
              password: user.password,
            });
          }}
        />
        <br />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => {
            setUser({
              email: user.email,
              password: e.target.value,
            });
          }}
        />
        <br />
        <input
          type="button"
          value="create"
          onClick={async () => {
            console.log(await createUser(user.email, user.password));
          }}
        />
      </form>
    </>
  );
};

export default ClientComponent;
