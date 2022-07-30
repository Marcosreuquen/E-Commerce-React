import { ProductsContainer } from "components/featuredProducts/styled";
import { SearchBox } from "components/searchBox";
import { useTokenValue } from "hooks";
import { apiCalls } from "lib/api";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { ItemCard } from "ui/itemCard";

export const ProductItem = ({ product }: any) => {
  const token = useTokenValue();
  const router = useRouter();
  const handleBuy = async () => {
    if (!token) {
      router.replace("/signin");
    }

    try {
      const { newOrder } = await apiCalls.order.create(
        {},
        token,
        product.objectID
      );
      if (newOrder)
        router.replace(newOrder.paymentURL, newOrder.paymentURL, {
          shallow: true,
        });
      if (!newOrder) Swal.fire({ title: "Something failed", icon: "error" });
    } catch (error) {
      console.log({ error });
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
            onBuy={handleBuy}
          />
        </ProductsContainer>
      </div>
    </div>
  );
};
