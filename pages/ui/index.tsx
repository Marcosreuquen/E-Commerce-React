import type { NextPage } from "next";
import Head from "next/head";
import { Body, LargeText, Subtitle, TinyText, Title } from "ui/texts";
import { Button } from "ui/button";
import { ProductCard } from "ui/card";
import { LogoCart } from "ui/logo";

const UiPage: NextPage = () => {
  return (
    <div style={{ padding: "10%" }}>
      <LogoCart />
      <Title>Title</Title>
      <Subtitle>Subtitle</Subtitle>
      <LargeText>Large Text</LargeText>
      <LargeText bold>Large Text</LargeText>
      <Body>
        Body: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet eros suscipit pulvinar euismod. Suspendisse potenti.{" "}
      </Body>
      <Body bold>
        Body: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet eros suscipit pulvinar euismod. Suspendisse potenti.{" "}
      </Body>
      <TinyText>
        Tiny text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus imperdiet eros suscipi
      </TinyText>
      <Button primary>Texto del botón</Button>
      <Button secondary>Texto del botón</Button>
      <Button alt>Texto del botón</Button>
      <ProductCard
        id='384fnhf578354'
        img='/reloj.png'
        price={487}
        title='Reloj re contra re super guachiguau'
      />
    </div>
  );
};

export default UiPage;
