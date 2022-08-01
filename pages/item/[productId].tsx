import { ProductItem } from "components/item";
import { apiCalls } from "lib/api";
import type { NextPage } from "next";

const Item: NextPage = ({ product }: any) => {
  return (
    <div style={{ paddingTop: 84 }}>
      {product ? <ProductItem product={product} /> : ""}
    </div>
  );
};

export async function getStaticPaths() {
  const allProductIds = [
    "recuwlzFbgE81uCIG",
    "recaVWlfBXc3NKxaV",
    "recO2rFW7uOzqyXRq",
  ];
  return {
    paths: allProductIds.map((productId) => {
      return { params: { productId } };
    }),
    fallback: true, // false or 'blocking'
  };
}
// This gets called on every request
export async function getStaticProps(context: any) {
  // Fetch data from external API
  const productId = context.params.productId as string;
  // Pass data to the page via props
  const product = await apiCalls.product.searchById(productId);
  return { props: { product }, revalidate: 60 };
}

export default Item;
