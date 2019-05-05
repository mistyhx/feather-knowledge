import React from "react";
import { Layout, Icon } from "antd";
import "./index.less";

const { Header } = Layout;

function GlobalHeader() {
  return (
    <Header className="header">
      <Icon type="setting" />
    </Header>
  );
}

export default GlobalHeader;
