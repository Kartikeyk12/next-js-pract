// Intercepting Route at Same Level (.)
// This intercepts navigation from /blogs to /blogs/[blogId]
// When you click a link on /blogs page, this modal/page will show instead of navigating to the full page
// Use case: Show a modal or preview when navigating from parent to child route

import Link from "next/link";

export default async function InterceptedBlogDetails({
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
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%",
        }}
      >
        <h2>📖 Intercepted Blog {blogId} (Same Level)</h2>
        <p>
          This is an intercepting route at the same level using (.) syntax.
        </p>
        <p>
          <strong>Path:</strong> app/blogs/(.)[blogId]/page.tsx
        </p>
        <p>
          <strong>Intercepts:</strong> Navigation from /blogs to /blogs/[blogId]
        </p>
        <div style={{ marginTop: "1rem" }}>
          <Link
            href="/blogs"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#0070f3",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            Close (Go Back)
          </Link>
        </div>
      </div>
    </div>
  );
}

