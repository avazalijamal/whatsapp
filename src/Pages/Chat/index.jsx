import React from "react";
import "./style.css";
import { Layout } from "antd";
import { Sider, MainHeader, Content, Footer } from "../../Layout";

const Index = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider />
      <Layout>
        <MainHeader />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Index;
