export default function AboutPage() {
  console.log("About Server component");
  return (
    <>
      <h1>About page Date: {new Date().toLocaleTimeString()}</h1>
      {/* Let's add a data time inside the server component and the build the nextjs application the time this page will get build will be used and it means that this page will get run on the build time and statically rendered to the browser */}
    </>
  );
}
