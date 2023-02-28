/**
 * @Author: YUME
 * @createdTime: 2022-12-2022/12/29 19:59
 * @description:
 */
import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Main>
      <h1>🚧哦哟!</h1>
      <h2>404 没有找到页面</h2>
      <p>非常抱歉，没有找到此页面，你需要返回主页吗？</p>
    </Main>
  );
};
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.1rem;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.1rem;

    margin: 10px 0 20px;
  }
  p {
    padding: 0 0 10%;
    text-align: center;
  }
`;
