export default async function BlogDetails({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const blogId = (await params).blogId;
  return (
    <>
      <h1>
        Welcome! You are now on Blog {blogId}. <br /> Read it and have a great
        day!
      </h1>
    </>
  );
}
