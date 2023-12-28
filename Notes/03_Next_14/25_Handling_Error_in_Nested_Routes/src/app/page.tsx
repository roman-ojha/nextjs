import Link from "next/link";

// Returning react component
export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      {/* Navigate using 'Link' component */}
      {/* https://nextjs.org/docs/app/api-reference/components/link */}
      <Link href="/blog">Blog</Link>
      {/* Link using query params */}
      <br />
      <Link
        href={{
          pathname: "/products",
          query: { category: "book" },
        }}
      >
        Product
      </Link>
      <br />
      {/* replace attribute Defaults to false. When true, next/link will replace the current history state instead of adding a new URL into the browser’s history stack. */}
      <Link href="/dashboard" replace>
        Dashboard
      </Link>
    </>
  );
}
