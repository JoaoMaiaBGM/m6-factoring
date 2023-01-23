import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 5.5rem;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  margin-bottom: 35px;

  @media screen and (max-width: 768px) {
    width: 100vw;
    justify-content: space-around;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100vw;
    justify-content: space-around;
  }

  .header-container {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .header-btn {
    width: 4rem;
    height: 2.5rem;
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

  .header-btn:hover {
    border: solid 1px #343a40;
  }
`;
