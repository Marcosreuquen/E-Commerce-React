import { FeaturedProducts } from "components/featuredProducts";
import type { NextPage } from "next";
import { Title } from "ui/texts";
import { apiCalls as api } from "lib/api";

const Thanks: NextPage = ({ featured }: any) => {
  return (
    <div
      style={{
        paddingTop: 84,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Title>¡Muchas gracias por confiar en nosotros!</Title>
      <FeaturedProducts products={featured} />
    </div>
  );
};

export default Thanks;

export async function getServerSideProps(context: any) {
  const { results } = await api.product.featured();
  return {
    props: { featured: results }, // will be passed to the page component as props
  };
}
