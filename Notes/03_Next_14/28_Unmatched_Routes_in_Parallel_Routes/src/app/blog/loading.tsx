// https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
// This file will automatically wrap './page.tsx' file and all it's nested children with in the react suspense boundary.
// So now whenever we will visit to '/blog' page and it's children page we will going to see this component which will automatically going to replaced by the blog content when it finished rendering
export default function Loading() {
  return <h1>Loading</h1>;
}
