import styled from "styled-components";

export const FormContainer = styled.form`
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

  button {
    width: 6rem;
    height: 2.5rem;

    margin: 0 auto;

    border: none;
    border-radius: 8px;
    background-color: #e9ecef;

    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #343a40;

    cursor: pointer;
    transition: 144ms;
  }

  button:hover {
    border: solid 1px green;
    background-color: green;
    color: #ffff;
  }
`;
