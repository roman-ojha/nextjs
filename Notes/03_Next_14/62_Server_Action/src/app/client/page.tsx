import type { NextPage } from "next";
import ClientForm from "@/components/ClientForm";
// Because this is the server component we can import the server action here
import { createUserUsingFormData, createUser } from "@/server-action";

const ClientPage: NextPage = () => {
  return (
    <>
      <h1>Client component page</h1>
      {/* You can also pass a Server Action to a Client Component as a prop: */}
      <ClientForm
        createUserUsingFormData={createUserUsingFormData}
        createUser={createUser}
      />
    </>
  );
};

export default ClientPage;
