import { useRouter } from "next/router";
const About = (props) => {
  const router = useRouter();
  return (
    <div>
      <h1>This is the {router.query.data} page</h1>
      {/* now here we can access the passed data from routing using 'useRouter' */}
    </div>
  );
};

export default About;
