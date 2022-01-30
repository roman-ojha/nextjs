import Link from "next/link";
// we have to import 'Link' so that page will not refresh

const index = () => {
  return (
    <>
      <nav>
        <ul className="menu-bar">
          <li>
            <Link href="/">
              {/* we have to put href inside the link rather then in ancher tag */}
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link
              href={{
                // we have to do this to pass the data while routing
                pathname: "/about",
                query: {
                  data: "About",
                },
              }}
            >
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/contact",
                query: {
                  data: "Contact",
                },
              }}
            >
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/product">
              <a>Product</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default index;
