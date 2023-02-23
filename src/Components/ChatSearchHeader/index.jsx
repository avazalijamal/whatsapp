import React, { useState } from "react";
import "./style.css";
import { Button, Col, Input, Row } from "antd";
import { BiFilter } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";

const Index = () => {
  const [icon, setIcon] = useState(true);

  return (
    <Row width='100%' align='middle' style={{ height: 45 }}>
      <Col span={20} style={{ paddingLeft: "5px" }}>
        <Input
          size='large'
          bordered={false}
          style={{ backgroundColor: "rgb(240, 242, 245)" }}
          placeholder='Поиск или новый чат'
          prefix={icon ? <AiOutlineSearch /> : <AiOutlineArrowLeft />}
          onFocus={() => setIcon(false)}
          onBlur={() => setIcon(true)}
        />
      </Col>
      <Col span={4} style={{ textAlign: "center" }}>
        <Button
          type='text'
          shape='circle'
          icon={<BiFilter size='30' />}
        ></Button>
      </Col>
    </Row>
  );
};

export default Index;
