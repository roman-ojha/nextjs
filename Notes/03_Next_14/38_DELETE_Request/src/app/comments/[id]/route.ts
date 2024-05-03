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

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { text } = await request.json();
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;

  return Response.json(comments[index]);
}
