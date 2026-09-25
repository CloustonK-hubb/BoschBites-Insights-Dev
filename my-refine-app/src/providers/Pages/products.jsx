import { useOne } from "@refinedev/core";

export const ShowProduct = () => { //JSX compinent names must begin with a capital letter or it is treated as plain HTML tags instead 
  const {
    result,
    query: { isLoading },
  } = useOne({ resource: "products", id: 123 });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Product name: {result?.name}</div>;
};