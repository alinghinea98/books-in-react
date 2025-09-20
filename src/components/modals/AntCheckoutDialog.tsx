import { Modal, Form, Input } from "antd";
import React, { useState } from "react";

interface CheckoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: { name: string; address: string }) => void;
}

function CheckoutDialog({ isOpen, onClose, onConfirm }: CheckoutDialogProps) {
  const [form] = Form.useForm();
  const [isValid, setIsValid] = useState(false);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      onConfirm(values);
      form.resetFields();
    } catch (error) {
      alert("Please fill in all required fields.");
    }
  };

  const handleOnCancel = () => {
    onClose();
    form.resetFields();
  }

  const handleValuesChange = () => {
    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length > 0);
    const allTouched = form.isFieldsTouched(true);
    setIsValid(allTouched && !hasErrors);
  };

  return (
    <Modal
      title="Checkout"
      open={isOpen}
      onCancel={handleOnCancel}
      onOk={handleOk}
      okText="Confirm"
      cancelText="Cancel"
      closable
      okButtonProps={{ disabled: !isValid }}
    >
      <Form form={form} layout="vertical" onValuesChange={handleValuesChange}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please enter your address" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CheckoutDialog;
