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
    width: 60vw;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    text-align: center;
    color: #3d75bb;
  }

  @media screen and (max-width: 767px) {
    .loginPage-container {
      width: 100vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .loginPage-action {
      width: 100vw;
      height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    .loginPage-info {
      display: none;
    }
  }

  @media screen and (min-width: 767px) {
    .loginPage-container {
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
    }

    .loginPage-title {
      width: 30vw;
      font-family: sans-serif;
      font-weight: 600;
      font-size: 1.5rem;
      text-align: center;
    }

    .loginPage-info {
      width: 50vw;
    }

    .loginPage-info img {
      width: 20rem;
      height: 20rem;
    }
  }

  .loginPage-paragraph {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #3d75bb;
  }

  .loginPage-info {
    width: 35vw;
  }

  .loginPage-info img {
    height: 30rem;
    width: 30rem;
  }

  @media screen and (min-width: 1025px) {
    .loginPage-container {
      min-height: 90vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .loginPage-title {
      width: 30vw;
      font-family: sans-serif;
      font-weight: 600;
      font-size: 1.7rem;
      text-align: start;
    }

    .loginPage-info {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50vw;
    }

    .loginPage-info img {
      width: 30rem;
      height: 30rem;
    }
  }

  .login-btn {
    width: 15rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fd377e;
    border: 2px solid #fd377e;
    border-radius: 8px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;
    transition: 144ms;
  }

  .login-btn:hover {
    background-color: #ff70a5;
  }
`;
