/*
    => to create a 404 error page we have to create a file name called '404.js'
*/
import Link from "next/link";
import { useRouter } from "next/router";
const ErrorPage = () => {
  const router = useRouter();
  const navigateHome = () => {
    // router.push("/");
    router.push({ pathname: "/", query: { data: "From 404" } });
  };
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, Page not found!</h2>
          <p>
            The page you are looking for might have been removed had it's name
            changed or is temporarily unavailable.
          </p>
          <a onClick={navigateHome}>Back To HomePage</a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
