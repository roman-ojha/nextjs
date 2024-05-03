import { NextResponse, type NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   // this middleware will redirect the request to the home page with request come to '/profile'

//   return NextResponse.redirect(new URL("/", request.url)); // new URL(<new_url>, <requested_url>)
// }

// // apply middleware for specific route
// // Approach 1: matcher config approach
// export const config = {
//   matcher: "/profile",
// };

// Approach 2: using conditional statement
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    // return NextResponse.redirect(new URL("/", request.url));

    // if you do url rewrite then the url remains the same but response will responded from '/'
    return NextResponse.rewrite(new URL("/", request.url));
  }

  // working with cookies
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  // working with headers
  response.headers.set("custom-header", "custom-value");

  return response;
}
