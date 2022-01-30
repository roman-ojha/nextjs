import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="menu-bar">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link
              href={{
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

export default Navbar;
