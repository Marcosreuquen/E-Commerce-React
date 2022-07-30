import { Footer } from "ui/footer";
import { HeaderLine } from "ui/header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <HeaderLine />
      {children}
      <Footer />
    </>
  );
};
