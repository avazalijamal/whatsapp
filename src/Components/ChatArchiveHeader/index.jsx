import { Button, Col, Row } from "antd";
import React from "react";
import "./style.css";
import { DownSquareOutlined } from "@ant-design/icons";

const Index = ({ count }) => {
  return (
    <Row
      width='100%'
      align='middle'
      style={{ height: 45, borderBottom: "1px solid rgb(175, 173, 173)" }}
    >
      <Col span={20}>
        <Button
          style={{ textAlign: "left" }}
          type='text'
          block
          icon={<DownSquareOutlined />}
        >
          Число Пользователей
        </Button>
      </Col>

      <Col span={4} style={{ textAlign: "center" }}>
        {count}
      </Col>
    </Row>
  );
};

export default Index;
