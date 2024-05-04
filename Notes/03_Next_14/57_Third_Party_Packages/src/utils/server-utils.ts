// this file only contain the function that is intended to user only for server component
// To make this functions/module server only we can use a server-only package

// when we import server-only it insure that module cause the build time error if it is included in the client side bundle
import "server-only";

export const serverSideFunction = () => {
  console.log(
    `use multiple libraries,
     use environment variables,
     interact with a database,
     process confidential information`
  );
  return "server result";
};
