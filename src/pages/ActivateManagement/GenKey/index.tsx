import React, { useState } from "react";
import styled from "styled-components";
import { Button, Modal, InputNumber, Input, Select } from "antd";
import { PlusOutlined, RedoOutlined } from "@ant-design/icons";
export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <GenKey>
      <Button icon={<RedoOutlined />}>刷新</Button>
      <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
        生成激活码
      </Button>
      <Button>剩余可用积分 0</Button>
      <Modal
        title="生成激活码"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Line>
            <div>账号</div>
            <Select placeholder="请选择账号" />
          </Line>
          <Line>
            <div>类型</div>
            <Select placeholder="请选择类型" />
          </Line>
          <Line>
            <div>时间</div>
            <Select placeholder="选择号卡天数" />
          </Line>
          <Line>
            <div>数量</div>
            <InputNumber min={1} max={10} defaultValue={1} />
          </Line>
        </div>
      </Modal>
    </GenKey>
  );
};

const GenKey = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  button {
    :not(:last-child) {
      margin-right: 10px;
    }
  }
`;
const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  > div {
    margin-right: 10px;
    :last-child {
      width: 70%;
    }
  }
`;
