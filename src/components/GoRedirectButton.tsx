"use client";

import { useRouter } from "next/navigation";

function GoRedirectButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/products");
      }}
    >
      뒤로가기
    </button>
  );
}

export default GoRedirectButton;
