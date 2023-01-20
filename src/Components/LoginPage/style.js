import styled from "styled-components";

export const LoginPageContainer = styled.div`
  min-height: 100vh;
  background-color: #d1dce3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .loginPage-action {
    width: 30vw;
  }

  .loginPage-title {
    width: 100%;

    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.7rem;
    text-align: start;
    color: #3d75bb;
  }

  .loginPage-paragraph {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;

    color: #3d75bb;
  }

  .loginPage-info {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loginPage-info img {
    width: 30rem;
    height: 30rem;
  }

  .btn-login {
    width: 15rem;
    height: 3rem;

    justify-content: center;
    align-items: center;

    background-color: #fd377e;
    border: 2px solid #fd377e;
    border-radius: 8px;

    font-family: sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #ffffff;

    cursor: pointer;
    transition: 144ms;
  }

  .login-btn:hover {
    background-color: #ff70a5;
  }
`;
