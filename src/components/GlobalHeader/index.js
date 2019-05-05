import React from "react";
import { Layout, Icon, Button, Dropdown, Menu, Input } from "antd";
import "./index.less";

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="1">New topic</Menu.Item>
    <Menu.Item key="2">New post</Menu.Item>
  </Menu>
);

function GlobalHeader() {
  return (
    <Header className="header">
      <div className="header-right">Logo</div>
      <div className="header-right">
        <Icon className="header-icon" type="search" />
        <Input placeholder="Search" />

        <Dropdown overlay={menu}>
          <Button type="primary" className="new-button">
            New <Icon type="down" />
          </Button>
        </Dropdown>
        <Icon className="header-setting" type="setting" />
      </div>
    </Header>
  );
}

export default GlobalHeader;
