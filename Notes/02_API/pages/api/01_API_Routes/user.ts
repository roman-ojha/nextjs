import type { NextApiRequest, NextApiResponse } from "next";

type ResData = {
  id: number;
  name: string;
  gender: "male" | "female" | "other";
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  // http://localhost:3000/api/01_API_Routes/user
  res.status(200).json({ id: 1, name: "Roman Ojha", gender: "male" });
}
