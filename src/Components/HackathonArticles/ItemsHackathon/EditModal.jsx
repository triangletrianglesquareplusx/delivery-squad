import React, { useState } from "react";
import { Modal } from "antd";
import { Form, Input, Radio, InputNumber} from "antd";
import { useForm } from "antd/es/form/Form";

const { TextArea } = Input;

function EditModal(props) {
  let duty, judges;
  props.duty === "Yes" ? (duty = 1) : (duty = 0);
  props.judges === "Yes" ? (judges = 1) : (judges = 0);

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [valueDuty, setValueDuty] = useState(duty);
  const [valueJudges, setValueJudges] = useState(judges);
  const [form] = useForm();

  //form.submit calls this finish function
  const onFinish = (values) => {
    values.id = props.id;
    props.updateParentState(values);
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 500);
  };

  const onChangeDuty = (e) => {
    setValueDuty(e.target.value);
  };

  const onChangeJudges = (e) => {
    setValueJudges(e.target.value);
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
      <a href="#/" onClick={showModal}>
        Edit
      </a>
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
            id: props.id,
            hackathon: props.hackathon,
            duration: +props.duration,
            conducted: props.conducted,
            food: props.food,
            prevVenue: props.prevVenue,
            description: props.description,
            valueDuty: valueDuty,
            valueJudges: valueJudges,
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
                max: 20,
                message:
                  "Please input a title for the Hackathon (6 - 20 Chars)",
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
          <Form.Item label="On Duty" name="valueDuty">
            <Radio.Group onChange={onChangeDuty}>
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
                max: 30,
                message:
                  "Please type 'none' if no catering is planned. Otherwise 4-30 Chars",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Judges" name="valueJudges">
            <Radio.Group onChange={onChangeJudges}>
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

export default EditModal;
