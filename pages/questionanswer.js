import React,{Component} from 'react';
import { Row, Col, Divider,Layout ,Typography,Button, Menu} from 'antd';
import { browserHistory } from 'react-router';
import Router, { withRouter } from 'next/router'
import { SearchOutlined, ReadOutlined, FormOutlined  ,QuestionCircleOutlined} from '@ant-design/icons';
import Link from 'next/link';
class Discussion extends Component{
    state={
        current: '/'
    }
    handleClick=(e)=>{
        Router.push(e.key);
        this.setState({ current: e.key });
    }
    render(){
        
        return(
            <div className="side-menu">
                   <p>Blog</p>
            </div> 
        )
    }
}

export default (withRouter(Discussion))