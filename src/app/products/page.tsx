import Link from "next/link";

interface Ipage {}

function page({}: Ipage) {
  const products = ["shirt", "pants", "skirt", "shoes"];
  return (
    <ul>
      {products.map((product) => (
        <li>
          <Link href={`/products/${product}`}>{product}</Link>
        </li>
      ))}
    </ul>
  );
}

export default page;
