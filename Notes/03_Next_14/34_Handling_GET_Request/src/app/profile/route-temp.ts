// this is the route handler to handle the api
// And by default route handle routes will handle the request default rather then handling the 'page.tsx'
// to serve the page.tsx and also route.tsx in that case you can move 'routes.tsx' into the 'api' subdirectory
export async function GET() {
  return new Response("Profile API data");
}
