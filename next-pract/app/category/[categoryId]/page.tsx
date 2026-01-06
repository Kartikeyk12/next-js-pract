import Link from "next/link";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const categoryId = (await params).categoryId;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Category: {categoryId}</h1>
      <div style={{ marginTop: "2rem" }}>
        <h3>Test (..)(..) Intercepting Route:</h3>
        <p style={{ color: "#666", marginBottom: "1rem" }}>
          Click these review links to see the (..)(..) intercepting route in action.
          This demonstrates intercepting routes two levels up!
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <Link href="/product/1/reviews/review1">
              Product 1 - Review 1 (tests (..)(..) intercept)
            </Link>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <Link href="/product/1/reviews/review2">
              Product 1 - Review 2 (tests (..)(..) intercept)
            </Link>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <Link href="/product/2/reviews/review1">
              Product 2 - Review 1 (tests (..)(..) intercept)
            </Link>
          </li>
        </ul>
        <div style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "#fff9c4", borderRadius: "4px" }}>
          <p style={{ fontSize: "0.9rem", color: "#666" }}>
            <strong>Note:</strong> The (..)(..) intercepting route will show a modal when you click
            these links from this category page, demonstrating navigation two levels up.
          </p>
        </div>
      </div>
    </div>
  );
}

