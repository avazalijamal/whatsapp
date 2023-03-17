import React from "react";
import "./style.css";
import { profile_2 } from "../../Assets/img";

import { Button, Form, Image, Input, Typography } from "antd";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

const Index = () => {
  return (
    <div className='container'>
      <Form className='login-form' onFinish={""}>
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
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            size='large'
            prefix={<AiOutlineUser className='prefix' />}
            placeholder='Username'
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
            <Button type='link' style={{ padding: "2px" }}>
              Create an Account
            </Button>
          </Typography.Title>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Index;
