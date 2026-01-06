// Intercepting Route from One Level Up (..)
// This intercepts navigation from /product/[productId] to /blogs/[blogId]
// Demonstrates (..) syntax in a nested context (not at root level)
// Use case: Show a modal when navigating from product page to blog page

import Link from "next/link";

export default async function InterceptedBlogFromProduct({
  params,
}: {
  params: Promise<{ productId: string; blogId: string }>;
}) {
  const { productId, blogId } = await params;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#e3f2fd",
          padding: "2rem",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%",
          border: "2px solid #2196f3",
        }}
      >
        <h2>🏠 Intercepted Blog {blogId} (One Level Up)</h2>
        <p>
          This is an intercepting route from one level up using (..) syntax.
        </p>
        <p>
          <strong>Path:</strong> app/product/[productId]/(..)blogs/[blogId]/page.tsx
        </p>
        <p>
          <strong>Intercepts:</strong> Navigation from /product/{productId} to /blogs/{blogId}
        </p>
        <p style={{ color: "#1976d2", fontWeight: "bold" }}>
          Note: (..) cannot be used at root level. This example shows it in a nested context.
        </p>
        <div style={{ marginTop: "1rem" }}>
          <Link
            href={`/product/${productId}`}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#2196f3",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
              marginRight: "0.5rem",
            }}
          >
            Back to Product
          </Link>
          <Link
            href="/blogs"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#1976d2",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            Go to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}

