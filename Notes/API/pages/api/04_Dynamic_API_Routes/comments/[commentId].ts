/*
    -> for dynamic route we have to create the file name according to that
    -> the name that we specify inside [] will be the name that we will get while accessing dynamic route value
*/

import { NextApiRequest, NextApiResponse } from "next";
import comments from "@/data/comments";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // now we can the 'commentId' value like this:
  const { commentId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId as string)
  );
  res.status(200).json({ comment });
}
