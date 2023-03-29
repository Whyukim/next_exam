import { notFound } from "next/navigation";

interface Ipants {
  params: { slug: string };
}

export function generateMetadata({ params }: Ipants) {
  return {
    title: `제품의 이름 ${params.slug}`,
  };
}

function pants({ params }: Ipants) {
  if (params.slug === "nothing") {
    notFound();
  }
  return <div>{params.slug} pants</div>;
}

export default pants;

export function generateStaticParams() {
  const products = ["pants", "bag"];
  return products.map((product) => ({ slug: product }));
}
