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
import axios from "axios";

const Index = () => {
  const [photo, setPhoto] = useState("https://picsum.photos/200/300");
  const [fullName, setFullname] = useState();
  const [email, setEmail] = useState();

  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getOwner();
    getUsers();
  }, []);

  const getOwner = () => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const { fullName, photo, email } = user;
    setPhoto(`https://aticiliqkursu.az/v2.0.0/img/${photo}`);
    setFullname(fullName);
    setEmail(email);
  };

  const getUsers = (pag = -1) => {
    const url = "https://aticiliqkursu.az/v2.0.0//selectUser.php";
    axios.get(url, { params: { pag } }).then((res) => {
      const { data } = res.data;
      const [_count, _users] = data;
      setUsers(_users);
      setCount(_count);
    });
  };

  return (
    <Sider theme='light' width={400}>
      <ChatListHeader photo={photo} fullName={fullName} email={email} />
      <ChatSearchHeader />

      <Content style={{ height: "calc(100% - 110px)", overflow: "auto" }}>
        <ChatArchiveHeader count={count} />
        {users.map((value, index) => (
          <UserInfo
            key={index}
            photo={"https://aticiliqkursu.az/v2.0.0/img/" + value.photo}
            name={value.fullName}
            message={value.email}
            time={value.id}
          />
        ))}
      </Content>
    </Sider>
  );
};

export default Index;
