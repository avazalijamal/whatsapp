import React from "react";
import "./style.css";
import { profile_2 } from "../../Assets/img";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Layout,
  Row,
  Typography,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { Content } from "antd/es/layout/layout";

const Index = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [formDOM] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    // console.log("Success:", values);

    const url = "https://aticiliqkursu.az/v2.0.0//signup.php";
    const data = { ...values, photo: "profile.png" };

    axios.post(url, data).then((res) => {
      if (res.data.data.id) {
        messageApi.open({
          type: "success",
          content: "Пользователь успешно зарегистрирован",
        });
        formDOM.resetFields();
        navigate(process.env.REACT_APP_LOGIN);
      } else {
        messageApi.open({
          type: "error",
          content: "Неудачная попытка регистрации",
        });
      }
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout className='Layout'>
      {contextHolder}
      <Content className='Content-reg'>
        <Row style={{ height: "100%" }} justify={"center"} align='middle'>
          <Col xs={2} sm={4} md={6} lg={9} xl={9}></Col>
          <Col xs={20} sm={16} md={12} lg={6} xl={6}>
            <Form
              className='register-form'
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              form={formDOM}
            >
              <Form.Item name='profile_png_2'>
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
                name='fullName'
                rules={[
                  {
                    required: true,
                    message: "Please input your Fullname!",
                  },
                ]}
              >
                <Input
                  size='large'
                  prefix={<AiOutlineUser className='prefix' />}
                  placeholder='Fullname'
                  bordered={false}
                  className='input'
                />
              </Form.Item>

              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input
                  size='large'
                  prefix={<MdAlternateEmail className='prefix' />}
                  type='email'
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
                ]}
              >
                <Input.Password
                  size='large'
                  prefix={<AiOutlineLock className='prefix' />}
                  placeholder='Password'
                  bordered={false}
                  className='input'
                />
              </Form.Item>

              <Form.Item
                name='confirmPassword'
                rules={[
                  {
                    required: true,
                    message: "Please input your Password again!",
                  },
                ]}
              >
                <Input.Password
                  size='large'
                  prefix={<AiOutlineLock className='prefix' />}
                  placeholder=' Confirm Password'
                  bordered={false}
                  className='input'
                />
              </Form.Item>

              <Form.Item name='upload' valuePropName='fileList'>
                <Upload
                  name='photo'
                  action='/upload.do'
                  listType='picture'
                  multiple={false}
                >
                  <Button
                    color='rgb(49, 175, 145);'
                    htmlType='button'
                    size='large'
                    type='primary'
                    className='upload-button'
                    icon={<UploadOutlined />}
                  >
                    Upload a photo
                  </Button>
                </Upload>
              </Form.Item>

              <Form.Item style={{ textAlign: "center" }}>
                <Button
                  size='large'
                  type='primary'
                  htmlType='submit'
                  className='register-button-reg'
                >
                  Register
                </Button>
              </Form.Item>

              <Typography.Title level={5} style={{ fontWeight: "400" }}>
                Allready have an account?
                <Link
                  to={process.env.REACT_APP_LOGIN}
                  style={{ padding: "2px" }}
                >
                  Login
                </Link>
              </Typography.Title>
            </Form>
          </Col>
          <Col xs={2} sm={4} md={6} lg={9} xl={9}></Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Index;
