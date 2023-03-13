import React from "react";
import "./style.css";
import { profile_2 } from "../../Assets/img";

import { Button, Form, Image, Input } from "antd";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

const Index = () => {
  return (
    <div className='container'>
      <Form name='normal_login' className='login-form' onFinish={""}>
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
          name='username'
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<AiOutlineUser />}
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
          <Input
            prefix={<AiOutlineLock />}
            type='password'
            placeholder='Password'
            bordered={false}
            className='input'
          />
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Button type='primary' htmlType='submit' className='login-button'>
            Log in
          </Button>
          <Button type='link' htmlType='submit' className='register-button'>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Index;
