import React,{Component} from 'react';
import { DeleteOutlined } from "@ant-design/icons";
class CardHeader extends Component{
    render(){
        const {time,name ,avatar} = this.props;
        console.log("the avatar image is... ", avatar);
        return(
            <div className="card-header">
               <div className="post-header-profile-detail">
                    <div className="post-header-profile-image">
                        <img src={avatar}  className="profile-header-post-pic"/>
                    </div>
                    <div className="post-header-profile-name-time">
                        <span className="header-profile-header">{name}</span>
                        <span className="post-header-time">{time}</span>
                    </div>
               </div>
               <div  className="delete-post"><DeleteOutlined className="delete-outline"/></div>
            </div>
        )
    }
}

export default CardHeader;


