import React, { Component } from "react";
import Router from "next/router";
import { Card ,Form, InputNumber, Button,notification} from 'antd';
import { signinUser } from "../lib/auth";
import Layout from "../components/Layout/Layout";
import Input from '../components/Common/Input/Input'
class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    openError: false,
    isLoading: false
  };

  handleClose = () => this.setState({ openError: false });

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const { email, password } = this.state;
    event.preventDefault();
    const user = { email, password };
    this.setState({ isLoading: true, error: "" });
    signinUser(user)
      .then(() => {
        Router.push("/");
      })
      .catch(this.showError);
  };

  showError = err => {
    const error = (err.response && err.response.data) || err.message;
    this.setState({ error, openError: true, isLoading: false });
  };
  openNotification = (placement,error )=> {
    notification.info({
      message: `Error: ${error}`,
      description:error,
      placement,
    });
  };
  render() {
    const { classes } = this.props;
    const { error, openError, isLoading } = this.state;

    return (
      <div className="signin-root">
        <Card style={{ width: 500 }}>
          <form onSubmit={this.handleSubmit} className="signin-form">
                <Input placeholder="Email" name="email" type="email" inputCss="email"  handleChange={e=>this.handleChange(e)} /><br/><br/>
                <Input placeholder="Password"   name="password" type="password" inputCss="email"  handleChange={e=>this.handleChange(e)}/><br/>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
                disabled={isLoading}
                className="sign-btn"
              >{isLoading ? "Signing in..." : "Sign in"}</Button>
            </form>
        </Card>
        {error && 
            this.openNotification("bottomRight",error)
          }
      </div>
    );
  }
}



export default SignIn;
