import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  // read cookie
  const theme = request.cookies.get("theme");
  console.log(theme);

  // read cookie using next js
  console.log(cookies().get("resultsPerPage"));

  // set cookie using provided next js 'cookies'
  cookies().set("resultsPerPage", "20");

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      // set cookie like this here using header
      "Set-Cookie": "theme=dark",
    },
  });
}
