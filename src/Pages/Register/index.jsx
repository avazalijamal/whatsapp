import React from "react";
import "./style.css";
import { profile_2 } from "../../Assets/img";

import { Button, Form, Image, Input, Typography, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

const Index = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className='container-reg'>
      <Form
        className='register-form'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
          name='username'
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
          name='password'
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
          name='confirm-password'
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
          <Upload name='photo' action='/upload.do' listType='picture'>
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

        <Form.Item style={{ textAlign: "center" }} name='submit_button'>
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
          <Button type='link' style={{ padding: "2px" }}>
            Login
          </Button>
        </Typography.Title>
      </Form>
    </div>
  );
};

export default Index;
