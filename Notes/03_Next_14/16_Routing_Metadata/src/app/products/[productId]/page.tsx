import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
// Defining dynamic metadata
// Dynamic metadata depends on dynamic information
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  // you can use 'generateMetadata' function as async function as well where we can do asynchronous operation like fetching information from the database

  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    // title: `Product ${params.productId}`,
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Product {params.productId}</h1>;
}
