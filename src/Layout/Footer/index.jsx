import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import axios from "axios";
import io from 'socket.io-client';
import { ChatContext } from "../../Context";
import { Footer } from "antd/es/layout/layout";
import { Button, Col, Form, Input, Popover, Row, Space, notification } from "antd";
import { AiFillCamera } from "react-icons/ai";
import { GrDocument } from "react-icons/gr";
import { BiSmile } from "react-icons/bi";
import { BsImage, BsSticky, BsFillPersonFill } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FaPoll } from "react-icons/fa";

const socket = io('https://friendly-aeolian-golf.glitch.me');

const Index = ({ openCloseSmile }) => {

  const [clip, setClip] = useState(false);
  const clipHandler = () => setClip(!clip);
  const [useForm] = Form.useForm()
  const [api, contextHolder] = notification.useNotification();


  const { chat, Messages } = useContext(ChatContext);
  const [messages, setMessages] = Messages

  const user = JSON.parse(localStorage.getItem("user"));


  const sendMessage = (values) => {
    values._sendId = user.id
    values._acceptId = chat.id
    values._type = 1

    const url = "https://aticiliqkursu.az/v2.0.0/insert.php"

    axios.post(url, values).then(res => {

      if (Number.isInteger(res?.data?.data)) {
        useForm.resetFields()
        socket.emit('sendMessage', values);
      } else {
        api.error({
          message: "xəta baş verdi",
          description: res?.data?.data,
          placement: 'topRight'
        });
      }
    })
  }

  useEffect(() => {

    socket.on('receiveMessage', msg => {
      console.log('Received message:', msg);
      if ((msg._sendId === user.id && msg._acceptId === chat.id) || (msg._sendId === chat.id && msg._acceptId === user.id) ) {
        setMessages(message => [...message, msg])
      }
    });
  }, [])

  return (
    <Footer className='ChatFooter'>
      {contextHolder}
      <Form onFinish={sendMessage} form={useForm}>
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
            <Form.Item name="message">
              <Input
                style={{ backgroundColor: "white" }}
                bordered={false}
                size='large'
                placeholder='Введите сообщение'
              />
            </Form.Item>
          </Col>

          <Col style={{ width: 40 }}>
            <Button
              style={{ marginLeft: "5px" }}
              shape='circle'
              type='text'
              htmlType="submit"
              icon={<MdKeyboardVoice style={{ fontSize: "20" }} />}
            />
          </Col>
        </Row>
      </Form>
    </Footer>
  );
};

export default Index;
