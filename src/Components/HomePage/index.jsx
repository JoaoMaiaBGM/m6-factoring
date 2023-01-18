import { Container } from "./style";
import FactoringForm from "../Form";
import ValuesList from "../ValuesList";

const HomePage = () => {
  return (
    <>
      <Container>
        <FactoringForm />
        <ValuesList />
      </Container>
    </>
  );
};

export default HomePage;
