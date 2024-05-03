import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  // get the request header from request object
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));

  // Another way to get the header that nextjs provide
  const headerList = headers();
  console.log(headerList.get("Authorization"));

  // Send header in response body, for that we have to return a new response with the new headers
  new Response("<h1>Profile API data</h1>"); // response as a plain text
  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
