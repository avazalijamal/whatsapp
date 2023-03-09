import React, { useState } from "react";
import "./style.css";
import { Layout } from "antd";
import { Sider, MainHeader, Content, Footer } from "../../Layout";

const Index = () => {
  const [smile, setSmile] = useState(false);
  const openCloseSmile = () => setSmile(!smile);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider />
      <Layout>
        <MainHeader />
        <Content smile={smile} />
        <Footer openCloseSmile={openCloseSmile} />
      </Layout>
    </Layout>
  );
};

export default Index;
