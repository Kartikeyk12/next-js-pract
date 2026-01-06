// Intercepting Route - Nested Example (Multiple Levels)
// This intercepts navigation from /product/[productId] to /product/[productId]/reviews/[reviewId]
// Demonstrates intercepting routes across multiple nested levels
// Use case: Show review details in a modal when clicking from product page

import Link from "next/link";

export default async function InterceptedReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#f3e5f5",
          padding: "2rem",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%",
          border: "2px solid #9c27b0",
        }}
      >
        <h2>⭐ Intercepted Review (Nested Route)</h2>
        <p>
          <strong>Product:</strong> {productId}
        </p>
        <p>
          <strong>Review:</strong> {reviewId}
        </p>
        <p>
          <strong>Path:</strong> app/product/[productId]/(.)reviews/[reviewId]/page.tsx
        </p>
        <p>
          <strong>Intercepts:</strong> Navigation from /product/[productId] to
          /product/[productId]/reviews/[reviewId]
        </p>
        <p style={{ color: "#7b1fa2", fontWeight: "bold" }}>
          This demonstrates intercepting routes across multiple nested levels!
        </p>
        <div style={{ marginTop: "1rem" }}>
          <Link
            href={`/product/${productId}`}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#9c27b0",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            Back to Product
          </Link>
        </div>
      </div>
    </div>
  );
}

