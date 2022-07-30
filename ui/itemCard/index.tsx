import Image from "next/image";
import { Button } from "ui/button";
import { Body, Subtitle, Title } from "ui/texts";
import { Card, Content } from "./styled";

export function ItemCard({
  title,
  price,
  img,
  id,
  description,
  onBuy,
}: {
  title: string;
  price: any;
  img: string;
  id: string;
  description: string;
  onBuy: any;
}) {
  return (
    <Card>
      <Image
        src={img}
        alt={title}
        width={315}
        height={380}
        style={{ zIndex: -1 }}
        objectFit={"contain"}
        itemID='Image'
        loading='lazy'
      />
      <Content>
        <Title style={{ margin: 0 }}>{title}</Title>
        <Subtitle style={{ margin: 0 }}>${price}</Subtitle>
        <Button primary style={{ width: "100%" }} onClick={onBuy}>
          Comprar
        </Button>
        <Body>{description}</Body>
      </Content>
    </Card>
  );
}
