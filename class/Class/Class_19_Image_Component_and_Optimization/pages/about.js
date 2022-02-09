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
        {/* we can access anything automatically which are inside the public folder */}
        {/* to use Image component we must have to use 'width' and 'height' property or 'layout="fill"' property */}
        <Image
          src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
          width="500"
          height="300"
          alt="img"
        ></Image>
        {/* here if we want to use the url image then, next js will not understand from which domain we are using this image url */}
        {/* to solve that proplem we have to configure about we are trying to get image from this hostname, for that we have to configure in 'next.config.js' 
        images: {
          domains: ["ichef.bbci.co.uk"],
        },
        */}
      </div>
    </>
  );
};

export default About;
