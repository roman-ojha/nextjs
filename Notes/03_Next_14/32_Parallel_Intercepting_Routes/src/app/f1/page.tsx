import Link from "next/link";

// To setup a intercepting routes at the same level we use the '.' within parenthesis notation in a folder name like: '(.)f2'
// It is also possible to match intercepting segment one level above, the convention is to name a folder name like: '(..)f3'
// To match segments two levels above we can use '(..)(..)<name>'
// To match segment from the root app directory we can use '(...)'
export default function F1() {
  return (
    <>
      <h1>F1 page</h1>
      <div>
        <Link href="/f1/f2">F2</Link> {/* '(.)f2 */}
        <Link href="/about">About</Link> {/* (...)about */}
      </div>
    </>
  );
}
