import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";
import Head from "next/head";

/*
  -> in next.js we have:
      a) getStaticProps
          -> Fetch data at build time
      b) getStaticPaths
      c) getServerSideProps
*/

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="Roman" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar />
      <h1 className="heading">This is home page</h1>
      <h1 className={`${styles.header} ${styles.hello} anotherheader`}>
        Hello
      </h1>
      <style jsx>
        {`
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
