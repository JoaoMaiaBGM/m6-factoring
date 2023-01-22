import styled from "styled-components";

export const FormContainer = styled.form`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 60px;

  h2 {
    margin: 0 0 2px 0;

    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 22px;

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

  span {
    margin: 0;

    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 11px;

    color: #b3b3b3;
  }

  p {
    margin: 0;

    font-size: 12px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    color: red;
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
