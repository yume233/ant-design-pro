/**
 * @Author: YUME
 * @createdTime: 2023-01-2023/1/11 15:05
 * @description:
 */
import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useStore } from "@nanostores/react";
import { _isOptSwitcher } from "../../../../store/data";

export default () => {
  const optSwitcher = useStore(_isOptSwitcher);
  return <></>;
};
