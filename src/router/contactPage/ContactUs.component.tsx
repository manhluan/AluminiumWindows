import Layout from 'components/layout';
import React from 'react';
import { Row, Col } from 'antd';
import { Form, Input, InputNumber, Button } from 'antd';
import "./contactUs.style.scss";
import { ReactComponent as LocationIcon } from '../../assets/images/map-pin.svg';
import { ReactComponent as MailIcon } from '../../assets/images/mail.svg';
import { ReactComponent as PhoneIcon } from '../../assets/images/phone.svg';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const ContactUs = () => {
    const onFinish = (values: any) => {
        console.log(values);
    };
    return (
        <>
            <Layout>
                <Row className='contactUs_container'>
                    <Col md={{span:6}} xs={{span:24}} className='contactUs_left'>
                        <h2 className='contact_title'>WELCOME TO AUSTRALIA</h2>
                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut ali</p>
                        <ul>
                            <li>
                                <div>
                                    <LocationIcon className='contactUs_icons'/>
                                </div>
                                <div>
                                    <span>123 Suspendis matis, Sollicitudin District,Accums Fringilla</span>
                                </div>

                            </li>
                            <li>
                                <div>
                                    <MailIcon className='contactUs_icons'/>
                                </div>
                                <div>
                                    <span>Email: support@example.com</span>
                                </div>

                            </li>
                            <li>
                                <div>
                                    <PhoneIcon className='contactUs_icons'/>
                                </div>
                                <div>
                                    <span> Hotline: 0123456789</span>
                                </div>

                            </li>
                        </ul>
                    </Col>
                    <Col md={{span:16}} xs={{span:24}}>
                        <h2 className='contact_title'>SEND YOUR COMMENTS</h2>
                        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                            <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name={['user', 'email']} label="Email"
                                rules={[
                                    { type: 'email' },
                                    { required: true }

                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item name={['user', 'website']} label="Subject"
                                rules={[
                                    { required: true }

                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item name={['user', 'introduction']} label="Introduction"
                                rules={[
                                    { required: true }

                                ]}
                            >
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                                <Button className='contactUs_submit_button' htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Layout>
        </>
    );
}

export default ContactUs;