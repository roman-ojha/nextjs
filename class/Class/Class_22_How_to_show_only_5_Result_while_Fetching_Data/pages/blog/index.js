import Navbar from "../../components/Navbar";
import styles from "../../styles/blog.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Blog = ({ data }) => {
  return (
    <div>
      <Navbar />
      {data.slice(0, 6).map((elm, index) => {
        return (
          <div key={index} className={styles.ssr_style}>
            <h3>{elm.id}</h3>
            <h2>{elm.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
