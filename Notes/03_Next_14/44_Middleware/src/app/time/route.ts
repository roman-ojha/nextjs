// by default next js will cached the GET method with the response object
// but if you don't want the caching behavior then we can achieve this using dynamic mode in Segment Config option
export const dynamic = "force-dynamic"; // by default the value of 'dynamic' is 'auto' which try to cache the value as much as possible
// we will set the 'force-dynamic' so that request is executed for each user request

export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}
