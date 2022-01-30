import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import styles from "../styles/contact.module.css";
const Contact = (props) => {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <h1 className={styles.heading}>This is the {router.query.data} page</h1>
    </div>
  );
};

export default Contact;
