import React, { useState } from "react";
import { ContactListNewChatHeader } from "../../Components";
import "./style.css";
import _contacts_ from "../../@json/contacts.json";

import "./style.css";
import { Button, Col, Drawer, Input, Row, Typography } from "antd";
import { MdChat } from "react-icons/md";
import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";

const Index = () => {
  const [searchModal, setSearchModal] = useState(false);

  const openModal = () => setSearchModal(true);
  const closeModal = () => setSearchModal(false);

  const [icon, setIcon] = useState(true);

  return (
    <>
      <Button
        type='text'
        icon={<MdChat className='chatListIcon' />}
        shape={"circle"}
        onClick={openModal}
      />
      <Drawer
        placement='left'
        closable={false}
        open={searchModal}
        mask={true}
        onClose={closeModal}
        headerStyle={{
          backgroundColor: "#008069",
          padding: "50px 10px 10px 20px",
        }}
        width={400}
        bodyStyle={{ padding: "0" }}
        title={
          <Row style={{ alignItems: "center" }}>
            <Col span={3}>
              <Button type='text' shape='circle' onClick={closeModal}>
                <AiOutlineArrowLeft size={20} style={{ color: "white" }} />
              </Button>
            </Col>
            <Col span={21}>
              <Typography.Title
                level={3}
                style={{ color: "white", marginTop: "6px" }}
              >
                Новый чат
              </Typography.Title>
            </Col>
          </Row>
        }
      >
        <Row
          width='100%'
          align='middle'
          style={{ height: 45, position: "sticky", top: "0", zIndex: "1" }}
        >
          <Col span={24} style={{ padding: "0" }}>
            <Input
              size='large'
              bordered={false}
              style={{ backgroundColor: "rgb(240, 242, 245)" }}
              placeholder='Поиск контактов'
              prefix={icon ? <AiOutlineSearch /> : <AiOutlineArrowLeft />}
              onFocus={() => setIcon(false)}
              onBlur={() => setIcon(true)}
            />
          </Col>
        </Row>

        {_contacts_.map((value, index) => (
          <ContactListNewChatHeader
            key={index}
            photo={value.photo}
            name={value.name}
            statuses={value.statuses}
          />
        ))}
      </Drawer>
    </>
  );
};

export default Index;
