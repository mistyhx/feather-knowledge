import React from "react";
import { Layout, Icon, Button, Dropdown, Menu, Input, Avatar } from "antd";
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
      <div className="header-right" />
      <div className="header-right">
        <Input placeholder="Search" prefix={<Icon className="header-search" type="search" />} />

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
