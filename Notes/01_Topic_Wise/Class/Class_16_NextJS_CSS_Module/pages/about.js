import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
const About = (props) => {
  const router = useRouter();
  /* we can use selector 'h1' to target this element we have to use class or id based selector to select the element on component based css */
  return (
    <div>
      <Navbar />
      <h1 className={styles.heading}>This is the {router.query.data} page</h1>
    </div>
  );
};

export default About;
