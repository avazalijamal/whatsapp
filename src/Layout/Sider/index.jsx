import _users_ from "../../@json/users.json";
/*-------silinecek------- */
import React from "react";
import "./style.css";
import {
  ChatArchiveHeader,
  ChatListHeader,
  ChatSearchHeader,
  UserInfo,
} from "../../Components";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
const Index = () => {
  return (
    <Sider theme='light' width={400}>
      <ChatListHeader />
      <ChatSearchHeader />

      <Content style={{ height: "calc(100% - 110px)", overflow: "auto" }}>
        <ChatArchiveHeader count={25} />
        {_users_.map((value, index) => (
          <UserInfo
            key={index}
            photo={value.photo}
            name={value.name}
            message={value.message}
            time={value.time}
          />
        ))}
      </Content>
    </Sider>
  );
};

export default Index;
