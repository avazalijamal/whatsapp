import React, { useState } from "react";
import "./style.css";
import { profile } from "../../Assets/img";
import { Col, Image, Row, Typography } from "antd";

const Index = ({ photo, name, statuses }) => {
  const [status, setStatus] = useState(false);
  const [src, setSrc] = useState(photo);

  const Show = () => setStatus(true);
  const Hidden = () => setStatus(false);
  const imageErrorHandler = () => setSrc(profile);
  return (
    <Row
      style={{ background: status && "rgb(240, 242, 245)", overflow: "auto" }}
      width='100'
      align='middle'
      className='UserInfoRow'
      onMouseOver={Show}
      onMouseLeave={Hidden}
    >
      <Col span={5}>
        <Image
          width={50}
          height={50}
          preview={false}
          style={{ borderRadius: "50%" }}
          src={src}
          onError={imageErrorHandler}
        />
      </Col>
      <Col span={19}>
        <Typography.Title level={5}>{name}</Typography.Title>
        <Typography.Text>{statuses}</Typography.Text>
      </Col>
    </Row>
  );
};

export default Index;
