import React from "react";
import {
  ContainerOutlined,
  PieChartOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Page", "1", <PieChartOutlined />),
  getItem("Development", "2", <PieChartOutlined />),
  getItem("Production", "3", <DesktopOutlined />),
  getItem("Company", "4", <ContainerOutlined />),
  getItem("Checklist", "5", <PieChartOutlined />),
  getItem("Department", "6", <DesktopOutlined />),
  getItem("EmailID", "7", <ContainerOutlined />),
];

interface Sider {
  style: React.CSSProperties;
}

const SiderBar: React.FC<Sider> = ({ style }) => {
  return (
    <Sider style={style}>
      <Menu
        mode="inline"
        style={{ width: "100%", height: "100%" }}
        items={items}
      />
    </Sider>
  );
};

export default SiderBar;
