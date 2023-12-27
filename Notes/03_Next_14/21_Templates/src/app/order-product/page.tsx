"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    // https://nextjs.org/docs/app/api-reference/functions/use-router
    // Navigate to home page
    router.push("/");
    // router.replace("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
