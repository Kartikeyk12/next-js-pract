function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  // TODO (DONE): Simulate random error for testing error boundary
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Random error occurred while fetching review data.");
  // }
  const { productId, reviewId } = await params;
  return (
    <>
      <h1>
        You are seeing review of {reviewId} from product {productId}
      </h1>
    </>
  );
}
