import React, { useState } from "react";
import "./style.css";
import { Footer } from "antd/es/layout/layout";
import { Button, Col, Input, Popover, Row, Space } from "antd";
import { AiFillCamera } from "react-icons/ai";
import { GrDocument } from "react-icons/gr";
import { BiSmile } from "react-icons/bi";
import { BsImage, BsSticky, BsFillPersonFill } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FaPoll } from "react-icons/fa";

const Index = ({ openCloseSmile }) => {
  const [clip, setClip] = useState(false);
  const clipHandler = () => setClip(!clip);

  return (
    <Footer className='ChatFooter'>
      <Space.Compact>
        <Row align='middle'>
          <Col style={{ width: 40 }}>
            <Button
              shape='circle'
              type='text'
              icon={
                <BiSmile onClick={openCloseSmile} style={{ fontSize: "20" }} />
              }
            />
          </Col>

          <Col style={{ width: 40 }}>
            <Popover
              placement='top'
              trigger='click'
              open={clip}
              content={
                <Space direction='vertical'>
                  <Button shape='circle' type='text' icon={<FaPoll />} />
                  <Button
                    shape='circle'
                    type='text'
                    icon={<BsFillPersonFill />}
                  />
                  <Button shape='circle' type='text' icon={<GrDocument />} />
                  <Button shape='circle' type='text' icon={<AiFillCamera />} />
                  <Button shape='circle' type='text' icon={<BsSticky />} />
                  <Button shape='circle' type='text' icon={<BsImage />} />
                </Space>
              }
            >
              <Button
                shape='circle'
                type='text'
                icon={
                  <AiOutlinePaperClip
                    onClick={clipHandler}
                    style={{ fontSize: "20" }}
                  />
                }
              />
            </Popover>
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
              shape='circle'
              type='text'
              icon={<MdKeyboardVoice style={{ fontSize: "20" }} />}
            />
          </Col>
        </Row>
      </Space.Compact>
    </Footer>
  );
};

export default Index;
