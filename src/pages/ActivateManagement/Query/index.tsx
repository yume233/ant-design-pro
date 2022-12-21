import React from "react";
import styled from "styled-components";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
export default () => {
  return (
    <Main>
      <div>
        <div>账号</div>
        <Input placeholder="请输入账号" />
      </div>
      <div>
        <div> 激活码</div>
        <Input placeholder="请输入激活码" />
      </div>
      <div>
        <div>门店ID</div>
        <Input placeholder="请输入门店id" />
      </div>
      <div>
        <Button type="primary" icon={<SearchOutlined />}>
          搜索
        </Button>
        <Button style={{ marginLeft: "10px" }}>重置</Button>
      </div>
    </Main>
  );
};
const Main = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: auto;
    display: flex;
    div {
      height: 32px;
      width: 60px;
      line-height: 32px;
      text-align: center;
    }
    :not(:last-child) {
      margin-right: 10px;
    }
  }
  //p {
  //  text-align: center;
  //  width: 100px;
  //  height: 32px;
  //}
`;
