import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import Pages from "../../../pages";
const { Content, Sider } = Layout;
import items, { router } from "./MenuItems";

export default () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate(router[e.key] ? router[e.key] : "/");
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={onClick}
        />
      </Sider>
      <Layout className="site-layout">
        <Main style={{ margin: "0 16px" }}>
          <Pages />
        </Main>
      </Layout>
    </Layout>
  );
};
const Main = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
