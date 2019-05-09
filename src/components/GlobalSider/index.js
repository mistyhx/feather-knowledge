import React from "react";
import { Layout, Menu, Icon } from "antd";
import "./index.less";

const { Sider } = Layout;

function GlobalSider() {
  return (
    <Sider className="sider">
      <Menu className="sider-menu" theme="light" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Icon type="home" />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="home" />
          <span>My feed</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default GlobalSider;
