import React from "react";
import styled from "styled-components";
import bg from "assets/img/bg.jpg";
import point from "assets/img/point.png";
import { HashRouter } from "react-router-dom";
import Layout from "./components/global/Layout";
//[ package ]

//=> Main Component
export default () => {
  return (
    <Main>
      <HashRouter>
        <Layout />
      </HashRouter>
    </Main>
  );
};

//=> Style Component
const Main = styled.main`
  //background: url(${bg}) no-repeat;
  //background-size: cover;
  width: 100vw;
  height: 100vh;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //flex-direction: column;
`;
