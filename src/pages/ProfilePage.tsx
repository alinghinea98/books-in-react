import React, { use, useState } from "react";
import { useUser } from "../contexts/UserContext.tsx";
import { Button, Card, Form, Input } from "antd";

function ProfilePage() {
  const { user, login, logout } = useUser();

  if (user) {
    return (
      <Card title="Profile" style={{ maxWidth: 400 }}>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
        <Button type="primary" danger onClick={logout}>
          Logout
        </Button>
      </Card>
    );
  }

  const handleLogin = (values: { name: string; email: string }) => {
    login(values);
  };

  return (
    <Card title="Login" style={{ maxWidth: 400 }}>
      <Form
        layout="vertical"
        onFinish={handleLogin}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Invalid email format" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default ProfilePage;
