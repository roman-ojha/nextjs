/*
  -> 3 way to create css:
    a) Global(External) Css
      -> by default nextjs gives us the external css which is "../styles/globals.css"
      -> and by default nextjs import the "../styles/globals.css" inside the '_app.js' file
    b) Internal Css
    c) Inline Css
*/

import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

const index = () => {
  const router = useRouter();
  console.log(router.query.data);
  return (
    <>
      <Navbar />
    </>
  );
};

export default index;
