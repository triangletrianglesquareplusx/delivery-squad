import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Form, Input, Radio, InputNumber } from "antd";
import { useForm } from "antd/es/form/Form";

const { TextArea } = Input;

function NewItemModal(props) {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = useForm();



  //form.submit calls this finish function
  const onFinish = (values) => {
    
    values.id = Math.random(); //some id function need to be added
    props.addNewHackathon(values);

    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 500);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button className=" w-1/2 mb-12" type="primary" onClick={showModal}>
        Add new Hackathon
      </Button>
      <Modal
        title="Edit Hackathon Data"
        visible={visible}
        onOk={form.submit}
        okText="Submit Changes"
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            hackathon: '',
            duration: 0.5,
            conducted: '',
            food: '',
            prevVenue: '',
            description: '',

          }}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          layout="horizontal"
        >
          <Form.Item
            label="Title"
            name="hackathon"
            rules={[
              {
                required: true,
                min: 6,
                max: 15,
                message:
                  "Please input a title for the Hackathon (6 - 15 Chars)",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Duration"
            name="duration"
            rules={[
              {
                required: true,
                message: "Please input a duration",
              },
            ]}
          >
            <InputNumber min={0.5} step={0.5} max={1000} addonAfter="Hours" />
          </Form.Item>
          <Form.Item
            label="Conducted By"
            name="conducted"
            rules={[
              {
                required: true,
                min: 6,
                max: 25,
                message: "Please input a conductor! (6-25 Chars)",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="On Duty"
            name="valueDuty"
            rules={[
              {
                required: true,
                message: "Please select option",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}> Yes </Radio>
              <Radio value={0}> No </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Food"
            name="food"
            rules={[
              {
                required: true,
                min: 4,
                max: 20,
                message:
                  "Please type 'none' if no catering is planned. Otherwise 4-20 Chars",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Judges"
            name="valueJudges"
            rules={[
              {
                required: true,
                message: "Please select option",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}> Yes </Radio>
              <Radio value={0}> No </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Previous Venue"
            name="prevVenue"
            rules={[
              {
                required: true,
                min: 4,
                max: 20,
                message:
                  "Please type 'first event' if there is no previous venue. Otherwise 4 - 20 Chars",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                min: 100,
                message: "Min. 100 Chars",
              },
            ]}
          >
            <TextArea
              rows={4}
              maxLength={500}
              minLength={100}
              showCount={true}
              bordered={true}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default NewItemModal;
