import React, { useState } from "react";
import "./style.css";
import { Button, Drawer } from "antd";
import { MdChat } from "react-icons/md";

const Index = () => {
  const [searchModal, setSearchModal] = useState(false);

  const openModal = () => setSearchModal(true);
  const closeModal = () => setSearchModal(false);
  return (
    <>
      <Button
        type='text'
        icon={<MdChat className='chatListIcon' />}
        shape={"circle"}
        onClick={openModal}
      />
      <Drawer
        width={400}
        bodyStyle={{ padding: "10px" }}
        title='Новый чат'
        placement='left'
        closable={true}
        open={searchModal}
        mask={true}
        onClose={closeModal}
      ></Drawer>
    </>
  );
};

export default Index;
