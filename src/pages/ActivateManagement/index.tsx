import React, { useState } from "react";
import styled from "styled-components";
import { RedoOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Table, Space, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import Query from "./Query";
import GenKey from "./GenKey";
export default () => {
  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 1000; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
      tags: ["ASD", "233", "待定"],
    });
  }
  return (
    <Main>
      <Query />
      <GenKey />
      <TableData
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"] }}
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
