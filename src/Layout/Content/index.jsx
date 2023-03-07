import React from "react";
import "./style.css";
import { Content } from "antd/es/layout/layout";
import { MessageText } from "../../Components";

const Index = () => {
  return (
    <Content
      style={{
        background: "rgb(239, 235, 227)",
        overflow: "auto",
      }}
    >
      <MessageText
        message='Привет, как дела?'
        time='12:45'
        status={1}
        user={true}
      />
      <MessageText
        message='Привет, как дела?'
        time='12:45'
        status={2}
        user={false}
      />
      <MessageText
        message='Привет, как дела?'
        time='12:45'
        status={3}
        user={true}
      />
      <MessageText
        message='Привет, как дела?'
        time='12:45'
        status={2}
        user={false}
      />
      <MessageText
        message='Привет, как дела?'
        time='12:45'
        status={2}
        user={false}
      />
      <MessageText
        message='Привет, как дела?'
        time='12:45'
        status={2}
        user={false}
      />
      <MessageText
        message='Привет, как дела?'
        time='12:45'
        status={2}
        user={false}
      />
      <MessageText
        message='Привет, как дела?'
        time='12:45'
        status={2}
        user={false}
      />
      <MessageText
        message='Привет, как дела?'
        time='12:45'
        status={2}
        user={false}
      />
      <MessageText
        message='Привет, как дела?'
        time='12:45'
        status={2}
        user={false}
      />
    </Content>
  );
};

export default Index;
