import { notFound } from "next/navigation";

export default function ProductReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    // if 'not-found' page exist on this route then it will render that page
    // or if not then render global one
    notFound();
  }
  return (
    <h1>
      Product Id: {params.productId} Review Id {params.reviewId}
    </h1>
  );
}
