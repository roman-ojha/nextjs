// Here we can see that component can be use as async await, we will dive this in detail in further topics
export const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // delaying the product section by 2 section
  // imagine this simulate the time taken by fetching the data and render the component
  return <div>Product</div>;
};
