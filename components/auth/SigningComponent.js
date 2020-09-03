import React, { Component } from "react";
import { Breadcrumb, Icon, Row, Col, Layout, Card, Carousel, Button, Divider } from "antd";
import {
  authenticate,
  isAuth,
  removeLocalStorage,
  setLocalStorage,
  getCookie,
  removeCookie,
  setCookie,
} from "../../../exampl/actions/auth";
import axios from "axios";
import Router from "next/router";
class SigningComponent extends Component {
  state = {
    email: "",
    password: "",
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  submitHandler = () => {
    const data = {
      email: "royalsikandar24@gmail.com",
      password: "sikandar",
    };

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/user/signin", data, options)
      .then((res) => {
        console.log(res);
        authenticate(res.data, () => {
          Router.push("/", "/dashboard");
        });
      })
      .catch((err) => {
        console.log("ERROR: ====", err);
      });
  };
  render() {
    return (
      <Layout className="signing-cmp">
        <Row>
          <input type="email" placeholder="Please enter your email id" id="email" onChange={this.changeHandler} />
        </Row>
        <Row>
          <input type="password" placeholder="Please enter your password" id="password" onChange={this.changeHandler} />
        </Row>
        <Row>
          <button onClick={this.submitHandler}>Sign In</button>
        </Row>
      </Layout>
    );
  }
}
export default SigningComponent;
