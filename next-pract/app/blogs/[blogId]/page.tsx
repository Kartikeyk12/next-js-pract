// *by default, Next.js will try to generate pages at runtime for any params that are not pre-generated at build time.
export const dynamicParams = false; // *this is to stop generation of pages at runmtime that are not pre-generated.


// * This function is used to generate the list of paths that need to be statically generated at build time (also known as pre-rendering or SSG - Static Site Generation).
// * To check SSG pages goto - build > server > pages > blogs > [blogId].html
export async function generateStaticParams() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const blogs = await response.json();
  console.log(blogs);
  return blogs.map((blog: { id: unknown; }) => ({ blogId: String(blog.id) }));
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const blogId = (await params).blogId;
  console.log(blogId);
  return (
    <>
      <h1>
        Welcome! You are now on Blog {blogId}. <br /> Read it and have a great
        day!
      </h1>
    </>
  );
}
