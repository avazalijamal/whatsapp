import React from "react";
import axios from "axios";
import "./style.css";
import { profile_2 } from "../../Assets/img";
import { Link, useNavigate } from "react-router-dom";

import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Layout,
  Row,
  Typography,
  message,
} from "antd";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { Content } from "antd/es/layout/layout";

const Index = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [formDOM] = Form.useForm();
  const Redirect = useNavigate();

  const url = "https://aticiliqkursu.az/v2.0.0//signin.php";

  const onFinish = (values) => {
    axios.post(url, values).then(({ data, status }) => {
      if (status === 200 && data.data.id) {
        localStorage.setItem("user", JSON.stringify(data.data));
        formDOM.resetFields();
        setTimeout(() => {
          Redirect(process.env.REACT_APP_CHAT);
        }, 1000);
      } else {
        messageApi.open({
          type: "error",
          content: "Такого пользователя не существует",
        });
      }
    });
    console.log("Success", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {contextHolder}
      <Layout className='Layout'>
        <Content className='Content'>
          <Row style={{ height: "100%" }} justify={"center"} align='middle'>
            <Col xs={2} sm={4} md={6} lg={8} xl={9}></Col>
            <Col xs={20} sm={16} md={12} lg={8} xl={6}>
              <Form
                form={formDOM}
                className='login-form'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item>
                  <Image
                    className='image'
                    width={100}
                    height={100}
                    preview={false}
                    style={{ borderRadius: "50%" }}
                    src={profile_2}
                  />
                </Form.Item>
                <Form.Item
                  name='email'
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                    {
                      type: "email",
                      message: "Please input your Email correctly!",
                    },
                  ]}
                >
                  <Input
                    size='large'
                    prefix={<AiOutlineUser className='prefix' />}
                    placeholder='Email'
                    bordered={false}
                    className='input'
                  />
                </Form.Item>
                <Form.Item
                  name='_password'
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                    {
                      min: 7,
                      message: "Please input at least 7 symbols!",
                    },
                  ]}
                >
                  <Input.Password
                    size='large'
                    prefix={<AiOutlineLock className='prefix' />}
                    type='password'
                    placeholder='Password'
                    bordered={false}
                    className='input'
                  />
                </Form.Item>

                <Form.Item style={{ textAlign: "center" }}>
                  <Button
                    size='large'
                    type='primary'
                    htmlType='submit'
                    className='login-button'
                  >
                    Log in
                  </Button>
                  <Typography.Title level={5} style={{ fontWeight: "400" }}>
                    Not registered?
                    <Link
                      to={process.env.REACT_APP_REGISTER}
                      style={{ padding: "2px" }}
                    >
                      Create an Account
                    </Link>
                  </Typography.Title>
                </Form.Item>
              </Form>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={9}></Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Index;
