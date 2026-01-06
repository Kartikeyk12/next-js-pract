import Link from "next/link";

export default function Blogs() {
  return (
    <>
      <h1>This is Blog Page</h1>
      <p style={{ color: "#666", marginBottom: "1rem" }}>
        Click the links below to see intercepting routes in action. The (.)
        route will intercept navigation from this page.
      </p>
      <h3>You can read blogs such as:</h3>
      <ul>
        <li>
          <Link href="/blogs/blog1">Blog One</Link> - Click to see (.) intercept
        </li>
        <li>
          <Link href="/blogs/blog2">Blog Two</Link> - Click to see (.) intercept
        </li>
        <li>
          <Link href="/blogs/blog3">Blog Three</Link> - Click to see (.) intercept
        </li>
      </ul>
      <div style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "#f5f5f5", borderRadius: "4px" }}>
        <h4>Intercepting Routes Test:</h4>
        <p>
          <strong>From this page:</strong> Clicking above links will show the (.) intercepting route
        </p>
        <p>
          <strong>From home page:</strong> Navigate to /blogs/blog1 from home to see (...) intercept
        </p>
        <p>
          <strong>From product page:</strong> Go to /product/1 and click a blog link to see (..) intercept (nested context)
        </p>
        <p>
          <strong>From anywhere:</strong> Navigate to /blogs/blog1 from any route to see (...) intercept
        </p>
      </div>
    </>
  );
}
