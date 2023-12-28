"use client";
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    // throwing an error, creating a run time error
    throw new Error("Error loading review");
  }
  // to handle error
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Product Id: {params.productId} Review Id {params.reviewId}
    </h1>
  );
}
