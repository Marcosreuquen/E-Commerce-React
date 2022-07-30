import { ProductsContainer } from "components/featuredProducts/styled";
import { SearchBox } from "components/searchBox";
import { usePagination } from "hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { ProductCard } from "ui/card";
import { ViewHeight } from "ui/sections";
import { Body } from "ui/texts";

export const SearchResults = ({ products }: any) => {
  const router = useRouter();
  const [pagination, setPagination, next, prev] = usePagination();

  return (
    <div>
      <SearchBox dark wrap secondary />
      <ViewHeight>
        {products ? (
          <Body style={{ textAlign: "center" }}>
            Mostrando {products.results.length} resultados de{" "}
            {products.pagination.total}
            ...
          </Body>
        ) : (
          <Body>Buscar</Body>
        )}
        <ProductsContainer>
          {products
            ? products.results.map((product: any) => {
                return (
                  <ProductCard
                    id={product.objectID}
                    img={product.Images[0].url}
                    price={product["Unit cost"]}
                    title={product.Name}
                    key={product.objectID}
                  />
                );
              })
            : "no hay productos"}
        </ProductsContainer>
        <Link href='' passHref>
          <Body style={{ textAlign: "center" }} onClick={next}>
            {"ver más >"}
          </Body>
        </Link>
      </ViewHeight>
    </div>
  );
};
