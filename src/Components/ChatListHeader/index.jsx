import React from "react";
import "./style.css";
import { NewChatHeader } from "../../Components";
import { MdGroups, MdMoreVert } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";

import { Button, Col, Image, Row, Layout, Popover, Typography } from "antd";
const { Header } = Layout;

const _menu_ = [
  "Новая группа",
  "Новое сообщество",
  "Избранные сообщения",
  "Выбрать чаты",
  "Исчезающие сообщения",
  "Настройки",
  "Выйти",
];

const Index = ({ photo, fullName, email }) => {
  return (
    <Header style={{ background: "rgb(240, 242, 245)", paddingInline: 0 }}>
      <Row width='100%' align='middle' justify='space-between'>
        <Col span={4}>
          <Image
            width={50}
            height={50}
            preview={false}
            style={{ borderRadius: "50%" }}
            src={photo}
          />
        </Col>
        <Col
          span={12}
          style={{
            height: 60,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography.Title level={5}>{fullName}</Typography.Title>
          <Typography.Text>{email}</Typography.Text>
        </Col>
        <Col span={6} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type='text'
            icon={<MdGroups className='chatListIcon' />}
            shape={"circle"}
          />
          <Button
            type='text'
            icon={<TbCircleDashed className='chatListIcon' />}
            shape={"circle"}
          />
          <NewChatHeader />
          <Popover
            placement='bottomRight'
            trigger='click'
            content={_menu_.map((val, ind) => (
              <Button
                type='text'
                style={{ display: "block", width: "100%", textAlign: "left" }}
                key={ind}
              >
                {val}
              </Button>
            ))}
          >
            <Button
              type='text'
              icon={<MdMoreVert className='chatListIcon' />}
              shape={"circle"}
            />
          </Popover>
        </Col>
      </Row>
    </Header>
  );
};

export default Index;
