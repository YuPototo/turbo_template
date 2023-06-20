// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@company-name/database";

type Data = {
  posts: any[];
};

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const posts = await prisma.post.findMany();

  res.status(200).json({ posts });
}
