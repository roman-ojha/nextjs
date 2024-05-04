import { Suspense } from "react";
import { Product } from "@/components/Product";
import { Reviews } from "@/components/Reviews";

export default function ProductDetailPage() {
  return (
    <div>
      <h1>Product detail page</h1>
      {/* Now we will wrap the 'Product' component with the 'Suspense' component */}
      <Suspense fallback={<p>product loading...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>review loading...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
