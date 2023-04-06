import { getProduct, getProducts } from "@/api/products";
import GoRedirectButton from "@/components/GoRedirectButton";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
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
    redirect("/products");
    // notFound();
  }

  return (
    <>
      <Image
        src={`/images/${product.image}`}
        alt="image"
        width={300}
        height={300}
      />
      <div>{product.name} 페이지에 온걸 환영합니다</div>
      <GoRedirectButton />
    </>
  );
}

export default productPage;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.id }));
}
