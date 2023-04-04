import { IProducts } from "@/api/products";
import { getProducts } from "@/api/products";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProducts[]>
) {
  if (req.method === "GET") {
    const product = await getProducts();
    return res.status(200).json(product);
  }
}
