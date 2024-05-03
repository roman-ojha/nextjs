import { comments } from "../data";

// route handler received two parameter 'request' & 'context' in this case we will destructure 'params' from 'context'
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}
