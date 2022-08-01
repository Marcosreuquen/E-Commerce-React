import { SearchResults } from "components/searchResults";
import { useProductsQuery } from "hooks";
import type { NextPage } from "next";

const Search: NextPage = () => {
  const products = useProductsQuery();
  return (
    <div style={{ paddingTop: 84 }}>
      {products ? <SearchResults products={products} /> : <SearchResults />}
    </div>
  );
};

export default Search;
