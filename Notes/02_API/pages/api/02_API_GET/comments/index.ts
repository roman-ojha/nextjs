import { NextApiRequest, NextApiResponse } from "next";
import { CommentType } from "@/data/comments";
import comments from "@/data/comments";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CommentType[]>
) {
  res.status(200).json(comments);
}
