import { ProductCard } from "ui/card";
import { Subtitle } from "ui/texts";
import { Container, ProductsContainer } from "./styled";
export const FeaturedProducts = ({ products }: any) => {
  return (
    <Container>
      <Subtitle>Productos destacados</Subtitle>
      <ProductsContainer>
        {products.map((item: any) => {
          return (
            <ProductCard
              id={item.objectID}
              img={item.Images[0].url}
              price={item["Unit cost"]}
              title={item.Name}
              key={item.objectID}
            />
          );
        })}
      </ProductsContainer>
    </Container>
  );
};
