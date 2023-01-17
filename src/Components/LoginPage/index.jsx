import docs_img from "../../Assets/docs_img.png";
import { LoginPageContainer } from "./style";
import { Link } from "react-router-dom";

const LoginPage = ({ Login }) => {
  return (
    <LoginPageContainer>
      <div className='loginPage-action'>
        <h2 className="'loginPage-name">FACTORING</h2>
        <h1 className='loginPage-title'>
          Tenha o controle das antecipações de suas transações
        </h1>
        <p className='loginPage-paragraph'>de forma rápida e segura</p>
        <Link to='/home'>
          <button className='login-btn'>Iniciar</button>
        </Link>
      </div>
      <div className='loginPage-info'>
        <img src={docs_img} alt='login art' />
      </div>
    </LoginPageContainer>
  );
};

export default LoginPage;
