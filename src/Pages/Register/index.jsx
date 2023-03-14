import React, { useState } from "react";
import "./style.css";
import { profile_2 } from "../../Assets/img";

import { Button, Form, Image, Input } from "antd";
import {
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

const Index = () => {
  const [passInputType, setpassInputType] = useState("password");
  const [passConfInputType, setPassConfInputType] = useState("password");
  const [enteredPassword, setEnteredPassword] = useState("");

  const passwordInputHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const togglePassword = () => {
    if (passInputType === "password") {
      setpassInputType("text");
      return;
    } else {
      setpassInputType("password");
    }
    return;
  };

  const toggleConfPassword = () => {
    if (passConfInputType === "password") {
      setPassConfInputType("text");
      return;
    } else {
      setPassConfInputType("password");
    }
    return;
  };

  return (
    <div className='container-reg'>
      <Form name='normal_reg' className='register-form' onFinish={""}>
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
              message: "Please input your Fullname!",
            },
          ]}
        >
          <Input
            prefix={<AiOutlineUser />}
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
            prefix={<MdAlternateEmail />}
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
          <Input
            value={enteredPassword}
            onChange={passwordInputHandler}
            prefix={<AiOutlineLock />}
            type={passInputType}
            placeholder='Password'
            bordered={false}
            className='input'
            suffix={
              <Button
                onClick={togglePassword}
                size='small'
                type='text'
                shape='circle'
                icon={
                  passInputType === "password" ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )
                }
              />
            }
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
          <Input
            prefix={<AiOutlineLock />}
            type={passConfInputType}
            placeholder=' Confirm Password'
            bordered={false}
            className='input'
            suffix={
              <Button
                onClick={toggleConfPassword}
                size='small'
                type='text'
                shape='circle'
                icon={
                  passConfInputType === "password" ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )
                }
              />
            }
          />
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Button
            type='primary'
            htmlType='submit'
            className='register-button-reg'
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Index;
