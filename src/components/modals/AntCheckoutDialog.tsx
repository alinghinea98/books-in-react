import { Modal, Form, Input } from "antd";
import React from "react";

interface CheckoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: { name: string; address: string }) => void;
}

function CheckoutDialog({ isOpen, onClose, onConfirm }: CheckoutDialogProps) {
  const [form] = Form.useForm();

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

  return (
    <Modal
      title="Checkout"
      open={isOpen}
      onCancel={handleOnCancel}
      onOk={handleOk}
      okText="Confirm"
      cancelText="Cancel"
      closable
      okButtonProps={{
        disabled:
        !form.isFieldsTouched(true) ||
        form.getFieldsError().some(({ errors }) => errors.length > 0), 
      }}
    >
      <Form form={form} layout="vertical">
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
