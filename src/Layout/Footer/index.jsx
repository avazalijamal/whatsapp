import React from "react";
import "./style.css";
import { Footer } from "antd/es/layout/layout";
import { Button, Col, Input, Row } from "antd";
import { BiSmile } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";
import { AiOutlinePaperClip } from "react-icons/ai";

const Index = () => {
  return (
    <Footer className='ChatFooter'>
      <Input.Group>
        <Row align='middle'>
          <Col style={{ width: 40 }}>
            <Button type='text' icon={<BiSmile style={{ fontSize: "20" }} />} />
          </Col>

          <Col style={{ width: 40 }}>
            <Button
              type='text'
              icon={<AiOutlinePaperClip style={{ fontSize: "20" }} />}
            />
          </Col>

          <Col style={{ width: "calc(100% - 120px)" }}>
            <Input
              style={{ backgroundColor: "white" }}
              bordered={false}
              size='large'
              placeholder='Введите сообщение'
            />
          </Col>

          <Col style={{ width: 40 }}>
            <Button
              type='text'
              icon={<MdKeyboardVoice style={{ fontSize: "20" }} />}
            />
          </Col>
        </Row>
      </Input.Group>
    </Footer>
  );
};

export default Index;
