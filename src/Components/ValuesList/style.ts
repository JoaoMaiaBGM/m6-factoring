import styled from "styled-components";

export const ListContainer = styled.section`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(209, 220, 227, 0.18);

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

  span {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: 600;
    font-size: 23px;

    color: #5d9cec;
  }
`;
