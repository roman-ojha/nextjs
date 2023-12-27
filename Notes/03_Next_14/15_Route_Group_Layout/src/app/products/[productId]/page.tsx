export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  // to display the product id in the browser
  // Ever page in the app router route parameters as a prop 'params'
  return <h1>Product {params.productId}</h1>;
}
