import React from "react";
import "./style.css";
import { Content } from "antd/es/layout/layout";
import { MessageText } from "../../Components";
import { Drawer } from "antd";
import EmojiPicker from "emoji-picker-react";

const Index = ({ smile }) => {
  return (
    <Content
      style={{
        position: "relative",
        background: "rgb(239, 235, 227)",
        overflowY: smile ? "hidden" : "auto",
        overflowX: "hidden",
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

      <Drawer
        bodyStyle={{ padding: 0 }}
        placement='bottom'
        closable={false}
        open={smile}
        getContainer={false}
      >
        <EmojiPicker width={"100%"} />
      </Drawer>
    </Content>
  );
};

export default Index;
