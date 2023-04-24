import React, { useContext, memo, useState, useEffect } from "react";
import "./style.css";
import { Content } from "antd/es/layout/layout";
import { MessageText } from "../../Components";
import { Drawer } from "antd";
import EmojiPicker from "emoji-picker-react";
import { ChatContext } from "../../Context";
import axios from "axios";

const Index = ({ smile }) => {
  const { chat } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const url = "https://aticiliqkursu.az/v2.0.0//select.php";
    const params = { _sendId: user?.id, _acceptId: chat?.id, pag: -1 };

    if (user?.id && chat?.id) {
      axios.get(url, { params }).then((res) => {
        const { data } = res.data;
        const [count, message] = data;
        setMessages(message);
      });
    }
  }, [chat.id]);

  return (
    <Content
      style={{
        position: "relative",
        background: "rgb(239, 235, 227)",
        overflowY: smile ? "hidden" : "auto",
        overflowX: "hidden",
      }}
    >
      {messages.map((val, ind) => (
        <MessageText
          key={ind}
          message={val.message}
          time={val.begDate}
          status={val._status}
          user={val._senId === user.id}
        />
      ))}

      <Drawer
        mask={false}
        bodyStyle={{
          padding: 0,
        }}
        placement='bottom'
        closable={false}
        open={smile}
        getContainer={false}
      >
        <EmojiPicker width={"100%"} emojiStyle={"google"} />
      </Drawer>
    </Content>
  );
};

export default memo(Index);
