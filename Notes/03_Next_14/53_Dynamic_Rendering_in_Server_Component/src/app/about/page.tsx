import { cookies } from "next/headers";

export default function AboutPage() {
  const cookieStore = cookies(); // now we have accessed the cookies function.so, now this page will be dynamically rendered inside the server
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("About Server component");
  return (
    <>
      <h1>About page {new Date().toLocaleTimeString()}</h1>
      {/* Now this page will be render dynamically and 'new Date().toLocaleTimeString()' function will get run dynamically while rendering on the server side*/}
    </>
  );
}
