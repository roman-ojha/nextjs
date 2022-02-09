import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";

/*
  -> Two ways to add Images
    a) Internal Image
        -> image needs to under public folder
    b) External Image
        -> image from url
*/

const index = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <h1 className="heading">This is home page</h1>
      <h1 className={`${styles.header} ${styles.hello}`}>Hello</h1>
      <style jsx>
        {`
          // This is internal CSS called as the Styled JSX
          h1 {
            // now here we can use element selector
            font-size: 5rem;
          }
          .heading {
            color: green;
          }
        `}
      </style>
    </>
  );
};

export default index;
