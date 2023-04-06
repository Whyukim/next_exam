import { getProducts } from "@/api/products";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";
import Image from "next/image";

import picture from "../../../public/images/rion.jpg";

interface Ipage {}

// export const revalidate = 0;

async function page({}: Ipage) {
  // throw new Error();
  const products = await getProducts();

  return (
    <>
      <h1>제품소개페이지!</h1>
      <Image src={picture} alt="image" width={300} height={300} priority />
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Siberian_Tiger_by_Malene_Th.jpg/300px-Siberian_Tiger_by_Malene_Th.jpg"
        }
        alt="image"
        width={300}
        height={300}
        priority
      />
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
