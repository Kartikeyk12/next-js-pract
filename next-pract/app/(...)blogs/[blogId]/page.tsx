// Intercepting Route from Root Directory (...)
// This intercepts navigation from ANYWHERE in the app to /blogs/[blogId]
// This is the most powerful intercepting route - catches navigation from any level
// Use case: Global modal or preview that works from anywhere in your app

import Link from "next/link";

export default async function InterceptedBlogFromAnywhere({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const blogId = (await params).blogId;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff3e0",
          padding: "2rem",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%",
          border: "2px solid #ff9800",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2>🌍 Intercepted Blog {blogId} (From Root)</h2>
        <p>
          This is an intercepting route from root directory using (...) syntax.
        </p>
        <p>
          <strong>Path:</strong> app/(...)blogs/[blogId]/page.tsx
        </p>
        <p>
          <strong>Intercepts:</strong> Navigation from ANYWHERE to /blogs/[blogId]
        </p>
        <p style={{ color: "#f57c00", fontWeight: "bold" }}>
          ⚠️ This catches navigation from any route in your app!
        </p>
        <div style={{ marginTop: "1rem" }}>
          <Link
            href="/"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#ff9800",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
              marginRight: "0.5rem",
            }}
          >
            Go Home
          </Link>
          <Link
            href="/blogs"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#f57c00",
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

