import type { NextPage } from "next";
import Head from "next/head";
import { FeaturedProducts } from "components/featuredProducts";
import { Welcome } from "components/welcome";
import { apiCalls as api } from "lib/api";

const Home: NextPage = ({ featured }: any) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div style={{ paddingTop: 84 }}>
        <Welcome />
        <FeaturedProducts products={featured} />
      </div>
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
