import React,{Component} from 'react';
import { Badge } from "antd";
import { LikeOutlined,CommentOutlined,ShareAltOutlined  } from "@ant-design/icons";
class CardFooter extends Component{
    render(){
        const {commentCount,totalLikes,isLiked,handleLike} = this.props;
        return(
            <div className="card-footer">   
                    <p><LikeOutlined className={isLiked?`likeChecked`:`social`} onClick={handleLike}/> <span className="social-text">{totalLikes} upvote</span></p>
                    <p><CommentOutlined className="social"/> <span className="social-text">{commentCount}</span></p>
                    <p> <ShareAltOutlined className="social"/> <span className="social-text">122</span></p>
            </div>
        )
    }
}

export default CardFooter;