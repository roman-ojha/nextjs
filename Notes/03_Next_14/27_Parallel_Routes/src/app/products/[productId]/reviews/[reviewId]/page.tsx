"use client";
import { notFound } from "next/navigation";

export default function ProductReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Product Id: {params.productId} Review Id {params.reviewId}
    </h1>
  );
}
