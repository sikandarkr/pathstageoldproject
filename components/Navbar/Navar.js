import React, { Component } from "react";
import { isAuth, signout } from "../../actions/auth";
import Router from "next/router";
import { Breadcrumb, Icon, Row, Col, Layout, Card, Carousel, Button, Divider , Menu} from "antd";
import { connect } from "react-redux";
import Link from 'next/link';
import { MailOutlined, AppstoreOutlined, SettingOutlined,CaretDownOutlined  } from '@ant-design/icons';
import { signoutUser } from "../../lib/auth";
const { Header, Content, Footer } = Layout;
class Navbar extends Component {
  container = React.createRef();
  state = {
    current: 'mail',
    show:false
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
}
componentWillUnmount() {
  document.removeEventListener("mousedown", this.handleClickOutside);
}
handleClickOutside = event => {
  if (this.container.current && !this.container.current.contains(event.target)) {
    this.setState({
      show: false,
    });
  }
};
  toggleHandler=()=>{
    this.setState({show:!this.state.show})
  }
  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { current,show } = this.state;
    const {router, pageProps: { auth } } = this.props;
    const { user = {} } = auth || {};
    return (
      <>
       {user._id ? 
            (
              <div className="auth-nav"  ref={this.container}>
                <div>Left</div>
                <div>
                    <ul className="nav-menu">
                      <li className="list">Home</li>
                      <li className="list"><Link href={`/profile/${user._id}`}><a>Profile</a></Link></li>
                      <li className="list">Jobs</li>
                      <li className="list">Talent</li>
                      <li className="list" onClick={this.toggleHandler}><CaretDownOutlined /></li>
                    </ul>
                    {show? 
                      <ul className="submenu">
                        <li><Link href={`/createblog`}><a>Create Blogs</a></Link></li>
                        <li>Read Blogs</li>
                        <li>Post Job</li>
                        <li>Ask Question</li>
                        <li>Read Q & A</li>
                        <li>Logout</li>
                      </ul>:<></>
                    }
                </div> 
              </div>
            ):(
               <div className="with-noauth">
                 jkdf
                </div>
              )}
      </>
    );
  }}
const mapStateToProps = (state) => {
  return {
    users: state.profiles,
  };
};

export default connect(mapStateToProps,null)(Navbar);
