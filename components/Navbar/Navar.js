import React, { Component } from "react";
import { isAuth, signout } from "../../actions/auth";
import Router from "next/router";
import { Breadcrumb, Icon, Row, Col, Layout, Card, Carousel, Button, Divider } from "antd";
import { connect } from "react-redux";
import Link from 'next/link'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { signoutUser } from "../../lib/auth";
const { SubMenu } = Menu;
class Navbar extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    const {router, pageProps: { auth } } = this.props;
    const { user = {} } = auth || {};
    return (
      <div className="na" style={{ zIndex: 100}}>
            {user._id ? 
            (
              <div>
                 <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
                    <Menu.Item key="app" >
                      Logo
                    </Menu.Item>
                    <Menu.Item key="app" >
                    <Button>
                      <Link href={`/profile/${user._id}`}>Profile</Link>
                    </Button>
                    </Menu.Item>
                    <Menu.Item key="app" >
                    <Button onClick={signoutUser} className="signout">
                      Sign out
                    </Button>
                    </Menu.Item>
                </Menu>
              </div>
            ):
            (
              <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="app" onClick={() => Router.push("/")}>
                      Logo
                    </Menu.Item>
                    <Menu.Item key="app" onClick={() => Router.push("/signin")}>
                      Sign In
                    </Menu.Item>
                    <Menu.Item key="app"  onClick={() => Router.push("/signup")}>
                      Sign Up
                    </Menu.Item>
                </Menu>
            )}
         
      </div>
      
    );
  }}
const mapStateToProps = (state) => {
  return {
    users: state.profiles,
  };
};

export default connect(mapStateToProps,null)(Navbar);
