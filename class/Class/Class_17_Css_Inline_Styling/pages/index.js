import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";

const index = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <h1 style={{ fontSize: "5rem" }}>This is home page</h1>
      <h1 className={`${styles.header} ${styles.hello}`}>Hello</h1>
    </>
  );
};

export default index;
