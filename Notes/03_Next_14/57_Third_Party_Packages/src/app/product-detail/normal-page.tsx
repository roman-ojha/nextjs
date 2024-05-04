import { Product } from "@/components/Product";
import { Reviews } from "@/components/Reviews";

export default function ProductDetailPage() {
  return (
    <div>
      <h1>Product detail page</h1>
      {/* Because product and reviews section take a while to render the component this page will get fully loaded only after the 'Product' & 'Reviews' component will get render */}
      <Product />
      <Reviews />
    </div>
  );
}
