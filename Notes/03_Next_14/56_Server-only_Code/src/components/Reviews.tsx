export const Reviews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000)); // delaying the review section by 2 section
  // imagine this simulate the time taken by fetching the data and render the component
  return <div>Reviews</div>;
};
