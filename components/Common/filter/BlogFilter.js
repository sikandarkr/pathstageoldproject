import React,{Component} from 'react';
import { Card,Radio,Menu, Dropdown } from 'antd';
import { DownOutlined ,FilterOutlined} from '@ant-design/icons';
const { SubMenu } = Menu;
class BlogFilter extends Component{
    state ={
        select:"Filter",
        key:'',
        lifestyle:false,
        sports:false,
        fitness:false,
        technology:true

    }
    onSiteChangeHandler=(e)=>{
        const {value} = e.target;
        const {lifestyle,sports,fitness,technology} = this.state;
        if(value==1){
            this.setState({
                technology:true,
                sports:false,
                fitness:false,
                lifestyle:false
            })
        }
        if(value==2){
            this.setState({
                technology:false,
                sports:true,
                fitness:false,
                lifestyle:false
            })
        }
        if(value==3){
            this.setState({
                technology:false,
                sports:false,
                fitness:true,
                lifestyle:false
            })
        }
        if(value==4){
            this.setState({
                technology:false,
                sports:false,
                fitness:false,
                lifestyle:true
            })
        }
    }

    handleMenuClick =(e)=>{
        this.setState({
            select:e.item.props.children,
            key:e.key
        })
    }
    menu =()=> (
            <Menu>
                <Menu.ItemGroup>
                    <Menu.Item key="1" onClick={this.handleMenuClick}>Software Development</Menu.Item>
                    <Menu.Item  key="2" onClick={this.handleMenuClick}>Software testing</Menu.Item>
                    <Menu.Item  key="3" onClick={this.handleMenuClick}>Designing</Menu.Item>
                </Menu.ItemGroup>
          </Menu>
        )
    render(){
        const {
            select, 
            lifestyle,
            sports,
            fitness,
            technology
        } =this.state;
        return(
            <Card style={{ width: 300 }}>
                <Radio.Group name="radiogroup" defaultValue={1} className="blog-filter">
                    <Radio value={1} onChange={this.onSiteChangeHandler}>Technology</Radio>
                    {technology? <div className="drop-down-option">
                        <Dropdown overlay={this.menu} className="dropdown-select">
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <FilterOutlined />  {select} <DownOutlined />
                            </a>
                        </Dropdown>
                    </div>:<br/>}<br/>
                  
                    <Radio value={2} onChange={this.onSiteChangeHandler}>Sports</Radio>
                    {sports? <div className="drop-down-option">
                            <Dropdown overlay={this.menu} className="dropdown-select">
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <FilterOutlined />  {select} <DownOutlined />
                                </a>
                            </Dropdown>
                        </div>:<br/>}<br/>
                       
                    <Radio value={3} onChange={this.onSiteChangeHandler}>Fitness</Radio>
                        {fitness?<div className="drop-down-option">
                            <Dropdown overlay={this.menu} className="dropdown-select">
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <FilterOutlined />  {select} <DownOutlined />
                                </a>
                            </Dropdown>
                        </div>:<br/>}<br/>
                        
                    <Radio value={4} onChange={this.onSiteChangeHandler}>Lifestyle</Radio>
                        {lifestyle?<div className="drop-down-option">
                            <Dropdown overlay={this.menu} className="dropdown-select">
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <FilterOutlined />  {select} <DownOutlined />
                                </a>
                            </Dropdown>
                        </div>:<br/>}<br/>
                        <br/>
                </Radio.Group>
            </Card>
        )
    }
}

export default BlogFilter;