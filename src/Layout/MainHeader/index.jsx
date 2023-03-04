import React from "react";
import "./style.css";
import { MdMoreVert } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

import { Button, Col, Image, Row, Layout, Typography } from "antd";
const { Header } = Layout;

const Index = () => {
  return (
    <Header
      style={{
        background: "rgb(240, 242, 245)",
        paddingInline: 0,
        lineHeight: 0,
      }}
    >
      <Row width='100%' align='middle' className='currentUserInfoRow'>
        <Col span={5}>
          <Image
            width={50}
            height={50}
            preview={false}
            style={{ borderRadius: "50%" }}
            src='https://picsum.photos/200/300'
          />
        </Col>
        <Col span={14} style={{}}>
          <Typography.Title level={5}>Aliyev Ali</Typography.Title>
          <Typography.Text>Online</Typography.Text>
        </Col>
        <Col span={5} style={{}}>
          <Button
            type='text'
            icon={<AiOutlineSearch className='chatListIcon' />}
            shape={"circle"}
          />
          <Button
            type='text'
            icon={<MdMoreVert className='chatListIcon' />}
            shape={"circle"}
          />
        </Col>
      </Row>
    </Header>
  );
};

export default Index;
