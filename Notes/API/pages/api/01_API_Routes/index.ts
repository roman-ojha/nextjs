// to make this api route to work we have to export a function as default
// in convention is to call the function as handler because it handle the incoming request
import type { NextApiRequest, NextApiResponse } from "next";

type ResData = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  // this function automatically receive 'req' and 'res' parameters
  // by default 'req' and 'res' are the node js object

  // this api will be available on:
  // http://localhost:3000/api/01_API_Routes
  res.status(200).json({ name: "Roman Ojha" });
}
