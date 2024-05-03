// NOTE that is component is the react server component

export default function AboutPage() {
  console.log("About Server component"); // this log message will be shown in server running terminal rather then on browser console
  // Note that server component can't handle browser API and user interactivity
  return (
    <>
      <h1>About page</h1>
    </>
  );
}
