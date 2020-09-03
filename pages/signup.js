import React, { Component } from "react";
import SignupComponent from "../components/auth/SignupComponent";
import { Card ,Form, InputNumber, Button,notification} from 'antd';
import Input from '../components/Common/Input/Input'
export default class signup extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    openError: false,
    isLoading: false
  };

  render() {
    const { classes } = this.props;
    const { error, openError, isLoading } = this.state;
    return (
      <div className="signin-root">
        <Card style={{ width: 500 }}>
          <form onSubmit={this.handleSubmit} className="signin-form">
                <Input placeholder="Name" name="name" type="text" inputCss="email"  handleChange={e=>this.handleChange(e)} /><br/><br/>
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
      </div>
    );
  }
}
