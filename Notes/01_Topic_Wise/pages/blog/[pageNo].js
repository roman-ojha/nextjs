import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import styles from "../../styles/blog.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((elm) => {
    return {
      params: {
        pageNo: elm.id.toString(),
      },
    };
  });

  return {
    // inside props we have to pass { paths: [], fallback: boolean }
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  // inside the context we will get all the data that is comming from 'getStaticPaths'
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const pageNo = ({ data }) => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return (
    <>
      <Navbar />
      <div className={`${styles.ssr_style} ${styles.ssr_styles_inside}`}>
        <h3>{data.id}</h3>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    </>
  );
};

export default pageNo;
