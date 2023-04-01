import { getProducts } from "@/api/products";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";

interface Ipage {}

// export const revalidate = 0;

async function page({}: Ipage) {
  const products = await getProducts();

  return (
    <>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}

export default page;
