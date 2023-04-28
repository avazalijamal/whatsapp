import React, { useState } from "react";
import { ChatContext } from "../../Context";
import "./style.css";
import { Layout } from "antd";
import { NoChatPage } from "../../Components"
import { Sider, MainHeader, Content, Footer } from "../../Layout";


const Index = () => {
  const [smile, setSmile] = useState(false);
  const openCloseSmile = () => setSmile(!smile);
  const [id, setId] = useState(null);
  const [messages, setMessages] = useState([]);


  return (
    <ChatContext.Provider value={{ chat: { id, setId },Messages:[messages, setMessages] }}>
      <Layout style={{ height: "100vh" }}>
        <Sider />
        {
          !id ?
            <NoChatPage />
            :
            <Layout>
              <MainHeader />
              <Content smile={smile} />
              <Footer openCloseSmile={openCloseSmile} />
            </Layout>
        }
      </Layout>
    </ChatContext.Provider>
  );
};

export default Index;
