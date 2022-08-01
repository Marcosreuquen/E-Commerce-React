import { ProductsContainer } from "components/featuredProducts/styled";
import { SearchBox } from "components/searchBox";
import { useTokenValue } from "hooks";
import { useRouter } from "next/router";
import { ItemCard } from "ui/itemCard";

export const ProductItem = ({ product }: any) => {
  const token = useTokenValue();
  const router = useRouter();
  const handleClick = async () => {
    if (!token) {
      router.replace("/signin");
    } else {
      router.replace(`/checkout/${product.objectID}`);
    }
  };

  return (
    <div>
      <SearchBox dark wrap secondary />
      <div>
        <ProductsContainer>
          <ItemCard
            description={product.Description}
            id={product.objectID}
            img={product.Images[0].url}
            price={product["Unit cost"]}
            title={product.Name}
            onBuy={handleClick}
          />
        </ProductsContainer>
      </div>
    </div>
  );
};
