/*
  => if we will create other file name under the page/<folder>/<component>
    -> like this this is the nesting route
    -> ex:
      -> page/blog
        -> to access index.js (/blog)
        -> to access blog1.js (/blog/blog1)
        -> to access blog2.js (/blog/blog2)
*/

const index = () => {
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
};

export default index;
