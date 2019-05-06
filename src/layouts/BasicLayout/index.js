import React from "react";
import { Layout } from "antd";
import GlobalHeader from "../../components/GlobalHeader";
import GlobalSider from "../../components/GlobalSider";
import "./index.less";

const { Content } = Layout;

function BasicLayout(props) {
  return (
    <Layout className="basic-layout">
      <GlobalSider />
      <Layout>
        <GlobalHeader />
        <Content className="content">{props.children}</Content>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
