"use client";
import { useRouter } from "next/navigation";

export default function ProductList() {
  const router = useRouter();
  return (
    <>
      <h1>Product List</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <li>Product 4</li>
      </ul>
      <h3 onClick={() => router.back()} style={{ cursor: "pointer" }}>
        GO BACK
      </h3>{" "}
    </>
  );
}
