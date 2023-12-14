import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
import Image from "next/image";
const About = (props) => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.heading}>This is the {router.query.data} page</h1>
        <Image src="/image.jpg" width="500" height="300" alt="img"></Image>
        <Image
          src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
          width="500"
          height="300"
          alt="img"
        ></Image>
      </div>
    </>
  );
};

export default About;
