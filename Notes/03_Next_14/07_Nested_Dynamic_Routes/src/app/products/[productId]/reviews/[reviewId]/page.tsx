export default function ProductReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <h1>
      Product Id: {params.productId} Review Id {params.reviewId}
    </h1>
  );
}
