"use client";
import { useState } from "react";

interface Props {
  value?: number;
}

export function CartCounter({ value = 0 }: Props) {
  const [count, setCount] = useState(value);
  const handleCount = (type: "add" | "remove") => {
    if (type === "add") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={() => handleCount("add")}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => handleCount("remove")}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
}
