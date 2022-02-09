import Navbar from "../../components/Navbar";
import styles from "../../styles/blog.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  // we have to return the data that we are getting the at the build time
  return {
    // here we have to return props
    props: {
      data,
    },
  };
};

const Blog = ({ data }) => {
  // now here we are getting props data
  console.log(data);
  return (
    <div>
      <Navbar />
      {data.map((elm, index) => {
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
