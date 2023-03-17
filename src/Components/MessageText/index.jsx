import React, { useState } from "react";
import "./style.css";
import { BsChevronDown, BsCheck, BsCheckAll } from "react-icons/bs";
import { BiSmile } from "react-icons/bi";
import { Button, Col, Row, Space, Typography } from "antd";

const Index = ({ message, time, status, user }) => {
  const [reaction, setReaction] = useState(false);
  const reactionShow = () => {
    setReaction(true);
  };

  const reactionHide = () => {
    setReaction(false);
  };

  const Status = (status) => {
    switch (status) {
      case 1:
        return <BsCheck />;
      case 2:
        return (
          <>
            <BsCheckAll />
          </>
        );
      case 3:
        return (
          <>
            <BsCheckAll style={{ color: "blue" }} />
          </>
        );
      default:
        return null;
    }
  };
  return (
    <>
      {user ? (
        <Row
          className='MessageTextRight'
          align='middle'
          onMouseOver={reactionShow}
          onMouseOut={reactionHide}
        >
          <Col className='emoji'>
            {reaction && (
              <Button shape='circle' type='text' icon={<BiSmile />} />
            )}
          </Col>
          <Col className='text'>
            <Space style={{ width: "100%" }} direction='vertical'>
              <Typography.Text>{message}</Typography.Text>
              <Typography.Text style={{ float: "left" }} italic>
                {time} {Status(status)}
              </Typography.Text>
            </Space>
          </Col>
        </Row>
      ) : (
        <Row
          className='MessageTextLeft'
          align='middle'
          onMouseOver={reactionShow}
          onMouseOut={reactionHide}
        >
          <Col className='text'>
            <Space style={{ width: "100%" }} direction='vertical'>
              <Typography.Text style={{ marginLeft: 10 }}>
                {message}
              </Typography.Text>
              <Typography.Text style={{ float: "right" }} italic>
                {time} {Status(status)}
              </Typography.Text>
            </Space>
          </Col>
          {reaction && <Button shape='circle' type='text' icon={<BiSmile />} />}
        </Row>
      )}
    </>
  );
};

export default Index;
