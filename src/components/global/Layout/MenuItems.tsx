import React from "react";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?,
  keyPath?
) {
  return {
    key,
    icon,
    children,
    label,
  };
}
export default [
  //=>菜单子项

  getItem("应用", "sub1", <UserOutlined />, [
    getItem("辅助出餐", "1", null, null),
    getItem("自动回复", "2"),
    getItem("自动竞价", "3"),
    getItem("自动回评", "5"),
  ]),
  getItem("系统管理", "sub2", <TeamOutlined />, [
    getItem("子账号管理", "6"),
    getItem("门店管理", "7"),
  ]),
];
export const router = {
  1: "/ActivateManagement",
  6: "/AccountAdmin",
};
