import React from 'react'
import { Card,Row,Col } from 'antd';
const { Meta } = Card;

export default function ContactUs() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "800px" }}>
                <Row style={{ marginTop: "50px" }} justify="space-evenly" align='center'>
                    <Col span={24}>
                        <h1>Register</h1>
                    </Col>
                    <Col span={24}>
                        <form>
                            <div className="input-container">
                                <label>Username</label>
                                <input type="text" name="uname" required />
                            </div><br />
                            <div className="input-container">
                                <label>Email</label>
                                <input type="text" name="email" required />
                            </div><br />
                            <div className="input-container">
                                <label>Password </label>
                                <input type="password" name="pass" required />
                            </div><br />
                            <div className="input-container">
                                <label>Confirm Password </label>
                                <input type="password" name="pass" required />
                            </div><br />
                            <div className="button-container">
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </div>
  )
}
