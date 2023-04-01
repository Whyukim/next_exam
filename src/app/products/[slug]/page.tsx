import { getProduct, getProducts } from "@/api/products";
import { notFound } from "next/navigation";

interface IProductPage {
  params: { slug: string };
}

export function generateMetadata({ params }: IProductPage) {
  return {
    title: `제품의 이름 ${params.slug}`,
  };
}

async function productPage({ params: { slug } }: IProductPage) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return <div>{product.name} 페이지에 온걸 환영합니다</div>;
}

export default productPage;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.id }));
}
