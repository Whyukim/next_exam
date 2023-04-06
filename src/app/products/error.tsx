"use client";

import { useEffect } from "react";

interface IProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: IProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
