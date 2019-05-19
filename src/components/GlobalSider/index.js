import React from "react";
import { Layout, Menu, Icon } from "antd";
import featherLogo from "../../assets/feather_logo.svg";
import "./index.less";

const { Sider } = Layout;

function GlobalSider() {
  return (
    <Sider className="sider">
      <div className="logo">
        <img src={featherLogo} alt="feather-logo" width="60px" />
      </div>
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
