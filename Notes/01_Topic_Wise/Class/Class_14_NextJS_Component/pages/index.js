/*
 -> To create a component we can make a 'components' folder in project directory
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
