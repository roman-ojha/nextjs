import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
const Contact = (props) => {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <h1>This is the {router.query.data} page</h1>
      {/* now here we can access the passed data from routing using 'useRouter' */}
    </div>
  );
};

export default Contact;
