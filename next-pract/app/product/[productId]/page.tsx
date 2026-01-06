import Link from "next/link";

export default async function ProductId({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <>
      <h1>You are seeing product {productId}</h1>
      <div style={{ marginTop: "2rem" }}>
        <h3>Reviews (Click to see intercepting route):</h3>
        <ul>
          <li>
            <Link href={`/product/${productId}/reviews/review1`}>
              Review 1
            </Link>
          </li>
          <li>
            <Link href={`/product/${productId}/reviews/review2`}>
              Review 2
            </Link>
          </li>
          <li>
            <Link href={`/product/${productId}/reviews/review3`}>
              Review 3
            </Link>
          </li>
        </ul>
        <p style={{ color: "#666", fontSize: "0.9rem" }}>
          Note: Clicking these links will show an intercepted modal instead of
          navigating to the full page.
        </p>
      </div>
      <div style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "#f5f5f5", borderRadius: "4px" }}>
        <h3>Test (..) Intercepting Route:</h3>
        <p>Click a blog link below to see (..) intercept in action:</p>
        <ul>
          <li>
            <Link href="/blogs/blog1">Blog 1</Link> - Tests (..) from product to blogs
          </li>
          <li>
            <Link href="/blogs/blog2">Blog 2</Link> - Tests (..) from product to blogs
          </li>
        </ul>
      </div>
    </>
  );
}
