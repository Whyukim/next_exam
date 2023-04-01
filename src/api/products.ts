import path from "path";
import { promises as fs } from "fs";

export interface IProducts {
  name: string;
  id: string;
  price: number;
}

export async function getProducts(): Promise<IProducts[]> {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
}

export async function getProduct(id: string) {
  const products = await getProducts();
  return products.find((product) => product.id === id);
}
