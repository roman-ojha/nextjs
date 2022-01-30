/*
  => Next.js supports CSS Modules using the [name].module.css file naming convention.
*/
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";
// we have to import component based css like this
// this style will only work for this component

const index = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <h1 className={styles.header}>This is home page</h1>
      {/* to use css we have to get the css property like this  */}
      <h1 className={`${styles.header} ${styles.hello}`}>Hello</h1>
      {/* to use more then one class name for css property int he element then we have to use like this*/}
    </>
  );
};

export default index;
