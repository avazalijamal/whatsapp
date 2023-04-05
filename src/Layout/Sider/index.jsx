import _users_ from "../../@json/users.json";
/*-------silinecek------- */
import React, { useEffect, useState } from "react";
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
  const [photo, setPhoto] = useState("https://picsum.photos/200/300");
  const [fullName, setFullname] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { fullName, photo, email } = user;
    setPhoto(`https://aticiliqkursu.az/v2.0.0/img/${photo}`);
    setFullname(fullName);
    setEmail(email);
  }, []);

  return (
    <Sider theme='light' width={400}>
      <ChatListHeader photo={photo} fullName={fullName} email={email} />
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
