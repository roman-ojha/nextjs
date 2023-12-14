import { NextApiRequest, NextApiResponse } from "next";
import { CommentType } from "@/data/comments";
import comments from "@/data/comments";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CommentType[] | CommentType>
) {
  // here we will check the method that we will get so that we can perform different task according to that
  if (req.method === "GET") return res.status(200).json(comments);
  else if (req.method === "POST") {
    console.log(comments.length);
    const newComment: CommentType = {
      id: comments.length + 1,
      text: req.body.comment,
    };
    comments.push(newComment);
    return res.status(200).json(newComment);
  }
}
