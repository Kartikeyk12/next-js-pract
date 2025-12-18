import Link from "next/link";

export default function Blogs() {
  return (
    <>
      <h1>This is Blog Page</h1>
      <h3>You can read blogs such as</h3>
      <ul>
        <li>
          <Link href="/blogs/blog1">Blog One</Link>
        </li>
        <li>
          <Link href="/blogs/blog2">Blog Two</Link>
        </li>
        <li>
          <Link href="/blogs/blog3">Blog Three</Link>
        </li>
      </ul>
    </>
  );
}
