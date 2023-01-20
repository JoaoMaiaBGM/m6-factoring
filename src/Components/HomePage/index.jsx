import { Container } from "./style";
import FactoringForm from "../Form";
import Footer from "../footer";
import ValuesList from "../ValuesList";

const HomePage = () => {
  return (
    <>
      <Container>
        <FactoringForm />
        <ValuesList />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
