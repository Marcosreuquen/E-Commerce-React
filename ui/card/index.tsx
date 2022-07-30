import Image from "next/image";
import Link from "next/link";
import { LargeText, Subtitle } from "ui/texts";
import { Card, Content } from "./styled";

export function ProductCard({
  title,
  price,
  img,
  id,
}: {
  title: string;
  price: any;
  img: string;
  id: string;
}) {
  return (
    <Link href={`/item/${id}`} passHref>
      <Card>
        <Image
          src={img}
          alt={title}
          width={315}
          height={315}
          style={{ zIndex: -1 }}
        />
        <Content>
          <LargeText style={{ margin: 0 }}>{title}</LargeText>
          <Subtitle style={{ margin: 0 }}>${price}</Subtitle>
        </Content>
      </Card>
    </Link>
  );
}
