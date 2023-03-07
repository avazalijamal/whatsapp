import React, { useState } from "react";
import "./style.css";
import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";
import { Button, Col, Drawer, Input, Row } from "antd";

const Index = () => {
  const [searchModal, setSearchModal] = useState(false);

  const openModal = () => setSearchModal(true);
  const closeModal = () => setSearchModal(false);

  const [icon, setIcon] = useState(true);

  return (
    <>
      <Button
        type='text'
        icon={<AiOutlineSearch className='chatListIcon' />}
        shape={"circle"}
        onClick={openModal}
      />
      <Drawer
        bodyStyle={{ padding: "10px" }}
        title='Поиск сообщений'
        placement='right'
        closable={true}
        open={searchModal}
        mask={true}
        onClose={closeModal}
      >
        <Row width='100%' align='middle' style={{ height: 45 }}>
          <Col span={24} style={{ padding: "0" }}>
            <Input
              size='large'
              bordered={false}
              style={{ backgroundColor: "rgb(240, 242, 245)" }}
              placeholder='Поиск'
              prefix={icon ? <AiOutlineSearch /> : <AiOutlineArrowLeft />}
              onFocus={() => setIcon(false)}
              onBlur={() => setIcon(true)}
            />
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default Index;
