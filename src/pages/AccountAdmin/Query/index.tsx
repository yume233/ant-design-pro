import React from "react";
import styled from "styled-components";
import { Button, Input, Radio } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { RadioChangeEvent } from "antd";
export default () => {
  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    console.log(value);
  };
  return (
    <Main>
      <Block>
        <div style={{ width: "100px" }}>账号搜索：</div>
        <Input placeholder="请输入账号或门店名" />
      </Block>
      <Block>
        <div>插件授权：</div>
        <Radio.Group defaultValue="a" buttonStyle="solid" onChange={onChange}>
          <Radio.Button value="a">全部</Radio.Button>
          <Radio.Button value="b">已授权</Radio.Button>
          <Radio.Button value="c">未授权</Radio.Button>
        </Radio.Group>
      </Block>
      <Block>
        <div>平台：</div>
        <Radio.Group defaultValue="a1" buttonStyle="solid" onChange={onChange}>
          <Radio.Button value="a1">全部</Radio.Button>
          <Radio.Button value="b1">美团</Radio.Button>
          <Radio.Button value="c1">饿了么</Radio.Button>
        </Radio.Group>
      </Block>
      <Block>
        <Button type="primary" icon={<PlusOutlined />}>
          添加账号
        </Button>
      </Block>
    </Main>
  );
};
const Main = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  //p {
  //  text-align: center;
  //  width: 100px;
  //  height: 32px;
  //}
`;
const Block = styled.div`
  display: flex;
  > div {
    height: 32px;
    line-height: 32px;
    text-align: center;
  }
  :not(:last-child) {
    margin-right: 10px;
  }
`;
