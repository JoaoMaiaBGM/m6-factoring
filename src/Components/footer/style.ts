import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 30px;

  position: absolute;
  bottom: 0;

  background-color: #ffffff;
  box-shadow: 0px -6px 8px rgba(0, 0, 0, 0.25);
`;

export const FooterMain = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;

  .logoContainer {
    width: 30%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    h2 {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #000000;
    }
  }
  .footerNav {
    width: 25%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    a {
      color: inherit;
      text-decoration: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #000000;
      cursor: pointer;
    }
  }
  span {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #000000;
  }
`;
