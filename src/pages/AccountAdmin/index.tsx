import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { RedoOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Table, Tag } from "antd";
import { useStore } from "@nanostores/react";
import type { ColumnsType } from "antd/es/table";
import {
  DataType,
  getAccountData,
  _accountData,
  _filterAccountData,
  _isTableLoading,
} from "../../store/data";
import Query from "./Query";
import GenKey from "./GenKey";
export default () => {
  const data = useStore(_accountData);
  const isLoading = useStore(_isTableLoading);
  useEffect(() => {
    getAccountData();
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: "账号",
      dataIndex: "account",
    },
    {
      title: "平台",
      dataIndex: "platform",
    },
    {
      title: "账号类型",
      dataIndex: "accountType",
    },
    {
      title: "门店名称",
      dataIndex: "storeName",
    },
    {
      title: "账号创建时间",
      dataIndex: "creatTime",
    },
    {
      title: "插件授权状态",
      key: "tags",
      dataIndex: "authorizationTime",
      render: (_, { authorizationStatus }) => {
        return (
          <TagTime>
            <Tag color={authorizationStatus.status === true ? "green" : "red"}>
              {authorizationStatus.status === true ? "已授权" : "未授权"}
            </Tag>
            <div>{authorizationStatus.time}</div>
          </TagTime>
        );
      },
    },
  ];

  return (
    <Main>
      <Query />
      <GenKey />
      <TableData
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"] }}
        loading={isLoading}
      ></TableData>
    </Main>
  );
};
const Main = styled.div`
  width: 90vw;
  height: 86vh;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  input {
    height: 32px;
  }
`;

const TableData = styled(Table)`
  margin-top: 10px;
  padding: 10px;
  overflow-y: scroll;
`;
const TagTime = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
