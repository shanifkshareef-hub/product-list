import { Button, Drawer, Form, Input } from "antd";
import React, { useState } from "react";
import { CreateForm, IAddress } from "src/interfaces/common";

const CreateAddress: React.FC<CreateForm<IAddress>> = ({ setAddress }) => {
  const [isOpen, setOpen] = useState(false);
  const [form] = Form.useForm();

  const toggleModal = () => {
    setOpen(!isOpen);
  };

  const handleSubmit = (values: IAddress) => {
    setAddress(values);
    form.resetFields();
    toggleModal();
  };

  return (
    <div>
      <Button type="default" onClick={toggleModal}>
        Create
      </Button>
      <Drawer
        title="Create an address"
        open={isOpen}
        onClose={toggleModal}
        footer={
          <>
            <Button form="form" type="default" htmlType="submit">
              Submit
            </Button>
          </>
        }
      >
        <Form
          form={form}
          id="form"
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "Please input your city!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="State"
            name="state"
            rules={[{ required: true, message: "Please input your state!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true, message: "Please input your country!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="PinCode"
            name="pinCode"
            rules={[{ required: true, message: "Please input your pincode!" }]}
          >
            <Input type="number" />
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default CreateAddress;
