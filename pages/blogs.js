import React,{Component} from 'react';
import { Row, Col, Divider,Layout ,Typography,Button, Menu} from 'antd';
import { browserHistory } from 'react-router';
import Router, { withRouter } from 'next/router'
import { SearchOutlined, ReadOutlined, FormOutlined  ,QuestionCircleOutlined} from '@ant-design/icons';
import Link from 'next/link';
class Blog extends Component{
    
    render(){
        
        return(
            <main className="index">
                 <Layout>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                        <div className="side-menu">
                            <Menu
                              onClick={this.handleClick}
                              style={{ width: 256 }}
                              defaultSelectedKeys={['2']}
                              defaultOpenKeys={['sub1']}
                              mode="inline"
                              >
                                  <Menu.Item key="1"><Link href="/editprofile"><a><FormOutlined />Edit Profile</a></Link></Menu.Item>
                                  <Menu.Item key="2"><Link href="/blogs"><a><ReadOutlined/>Blogs</a></Link></Menu.Item>
                                  <Menu.Item key="3"><Link href="/questionanswer"><a><SearchOutlined/>uestion & Answer</a></Link>Q</Menu.Item>
                                  <Menu.Item key="4"><Link href="/jobs"><a><QuestionCircleOutlined />Jobs</a></Link></Menu.Item>
                              </Menu>
                        </div>
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <div>
                                <p>Jobs</p>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div >col-6</div>
                        </Col>
                    </Row>
              </Layout>
            </main>
        )
    }
}

export default (withRouter(Blog))