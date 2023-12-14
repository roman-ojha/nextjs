/*
  => when we will do 'yarn dev' first it will go the '_app.js' file ,
    -> there we  have:
          import '../styles/globals.css'
          function MyApp({ Component, pageProps }) {
            return <Component {...pageProps} />
          }
          export default MyApp
    -> here 'Component' means it is showing or rendering index.js component

*/

const index = () => {
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
};

export default index;
