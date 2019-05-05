import React from "react";
import { Layout } from "antd";
import GlobalHeader from "../../components/GlobalHeader";
import GlobalSider from "../../components/GlobalSider";
import "./index.less";

const { Content } = Layout;

function BasicLayout(props) {
  return (
    <Layout className="basic-layout">
      <GlobalHeader />
      <Layout>
        <GlobalSider />
        <Layout>
          <Content>{props.children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
