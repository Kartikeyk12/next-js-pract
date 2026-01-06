// Intercepting Route from Two Levels Up (..)(..)
// This intercepts navigation from /category/[categoryId] to /product/[productId]/reviews/[reviewId]
// Demonstrates (..)(..) syntax for intercepting routes two levels up in a nested context
// Use case: Show a modal when navigating from a category page to deeply nested product review routes

import Link from "next/link";

export default async function InterceptedReviewFromCategory({
  params,
}: {
  params: Promise<{ categoryId: string; productId: string; reviewId: string }>;
}) {
  const { categoryId, productId, reviewId } = await params;

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
          backgroundColor: "#fff9c4",
          padding: "2rem",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%",
          border: "2px solid #fbc02d",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2>⬆️⬆️ Intercepted Review (Two Levels Up)</h2>
        <p>
          <strong>Category:</strong> {categoryId}
        </p>
        <p>
          <strong>Product:</strong> {productId}
        </p>
        <p>
          <strong>Review:</strong> {reviewId}
        </p>
        <p>
          <strong>Path:</strong> app/category/[categoryId]/(..)(..)product/[productId]/reviews/[reviewId]/page.tsx
        </p>
        <p>
          <strong>Intercepts:</strong> Navigation from /category/{categoryId} to /product/{productId}/reviews/{reviewId}
        </p>
        <p style={{ color: "#f57f17", fontWeight: "bold" }}>
          This demonstrates (..)(..) syntax - intercepting routes two levels up in a nested context!
        </p>
        <p style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.5rem" }}>
          Note: (..)(..) cannot be used at root level, only in nested contexts.
        </p>
        <div style={{ marginTop: "1rem" }}>
          <Link
            href={`/category/${categoryId}`}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#fbc02d",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
              marginRight: "0.5rem",
            }}
          >
            Back to Category
          </Link>
          <Link
            href={`/product/${productId}`}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#f57f17",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            Go to Product
          </Link>
        </div>
      </div>
    </div>
  );
}

