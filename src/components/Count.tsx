"use client";

import { useState } from "react";

interface ICount {}

function Count({}: ICount) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h5>{count}</h5>
      <button onClick={() => setCount((num) => num + 1)}>숫자 증가</button>
    </>
  );
}

export default Count;
