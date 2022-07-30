import { SearchBox } from "components/searchBox";
import { Title } from "ui/texts";
import { WelcomeSection } from "./styled";

export const Welcome = () => {
  return (
    <WelcomeSection>
      <Title> El mejor e-commerce</Title>
      <SearchBox column primary />
    </WelcomeSection>
  );
};
