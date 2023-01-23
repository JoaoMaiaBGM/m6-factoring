import { Link } from "react-router-dom";
import { Container } from "./style";

const Header = () => {
  return (
    <>
      <Container>
        <div className='header-container'>
          <h2 className="'loginPage-name">FACTORING</h2>
          <Link to='/login'>
            <button className='header-btn' type='button'>
              Sair
            </button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Header;
