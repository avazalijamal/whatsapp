import React, { useState } from "react";
import "./style.css";
import { Button, Col, Image, Row, Space, Typography } from "antd";
import { profile } from "../../Assets/img";
import { BsChevronDown } from "react-icons/bs";

const Index = ({ photo, name, message, time }) => {
  const [status, setStatus] = useState(false);
  const [src, setSrc] = useState(photo);

  const Show = () => setStatus(true);
  const Hidden = () => setStatus(false);

  const imageErrorHandler = () => setSrc(profile);

  return (
    <Row
      width='100'
      align='middle'
      style={{ backgroundColor: status && "rgb(240, 242, 245)" }}
      className='UserInfoRow'
      onMouseOver={Show}
      onMouseLeave={Hidden}
    >
      <Col span={5}>
        <Image
          width={50}
          height={50}
          preview={false}
          style={{ borderRadius: "50%" }}
          src={src}
          onError={imageErrorHandler}
        />
      </Col>
      <Col span={14}>
        <Typography.Title level={5}>{name}</Typography.Title>
        <Typography.Text>{message}</Typography.Text>
      </Col>
      <Col span={5}>
        <Space
          direction='vertical'
          size={0}
          style={{ display: "flex", alignItems: "flex-end" }}
        >
          <Typography.Text code>{time}</Typography.Text>
          {status ? (
            <Button type='text' icon={<BsChevronDown />}></Button>
          ) : (
            <Button type='link' style={{ color: "transparent" }}></Button>
          )}
        </Space>
      </Col>
    </Row>
  );
};

export default Index;
