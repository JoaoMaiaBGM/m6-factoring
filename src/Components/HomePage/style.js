import styled from "styled-components";

export const Container = styled.div`
  width: 608px;
  height: 390px;

  display: flex;
  flex-direction: row;

  margin: 0 auto;
  align-items: center;
  gap: 30px;

  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #d1dce3;
  border-radius: 4px;
`;

export const FormContainer = styled.section`
  width: 50%;
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 60px;

  h2 {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 24px;
    line-height: 28px;

    color: #656565;
  }

  label {
    margin-bottom: -20px;

    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 14px;
    line-height: 16px;

    color: #656565;
  }

  input {
    width: 251px;
    height: 37px;

    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #dde6e9;
    border-radius: 4px;
  }
`;

export const ListContainer = styled.section`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(209, 220, 227, 0.18);

  div {
  }

  h2 {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-style: italic;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;

    color: #3d75bb;
  }

  ul {
    padding-left: 0;
  }

  .list-item {
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;

    h3,
    p {
      margin-right: 10px;

      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-style: italic;
      font-weight: 400;
      font-size: 16px;

      color: #5d9cec;
    }

    p {
      font-weight: 600;
      font-size: 18px;
    }
  }
`;
