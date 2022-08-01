import { FeaturedProducts } from "components/featuredProducts";
import { Welcome } from "components/welcome";
import { apiCalls as api } from "lib/api";
import type { NextPage } from "next";

const Home: NextPage = ({ featured }: any) => {
  return (
    <div style={{ paddingTop: 84 }}>
      <Welcome />
      <FeaturedProducts products={featured} />
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const { results } = await api.product.featured();
  return {
    props: { featured: results }, // will be passed to the page component as props
  };
}
