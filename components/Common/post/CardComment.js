import React,{Component} from 'react';
import { Badge } from "antd";
import { LikeOutlined,CommentOutlined,ShareAltOutlined  } from "@ant-design/icons";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import Input from '../Input/Input';
import Link from "next/link";
class CardComment extends Component{
    state = {
        text: ""
      };
    handleChange = event => {
        this.setState({ text: event.target.value });
    };
    handleSubmit = event => {
        const { text } = this.state;
        const { postId, handleAddComment } = this.props;
        event.preventDefault();
        handleAddComment(postId, text);
        this.setState({ text: "" },()=>{
            console.log("setstate is working.....",text);
        });
    };
    showComment=(comment)=>{
        const { postId, auth, classes, handleDeleteComment } = this.props;
        // const isCommentCreator = comment.postedBy._id === auth.user._id;
        return (
            <div>
                {comment?comment.map(comments=>{
                    return <>
                        <div className="comment-list">
                    <div className="comment-header-img">
                        <img src={comments.postedBy.avatar}  className="profile-header-post-pic"/>
                    </div>
                    <div className="comment-list-container">
                        <span className="commentor-name">
                            <Link href={`/profile/${comments.postedBy._id}`}>
                                <a>{comments.postedBy.name}</a>
                            </Link>
                        </span>
                        <span classsName="comment-time">{this.formatTimeCreated(comment.createdAt)}</span>
                        <p>{comments.text}</p>
                    </div>
                    </div>
                    </>
                }):null}
            </div>
        )
    }
    formatTimeCreated = time =>
        distanceInWordsToNow(time, {
        includeSeconds: true,
        addSuffix: true
    });
    render(){
        const { auth, comments, classes } = this.props;
        const { text } = this.state;
        return(
            <div className="card-comment">   
                <div className="comment-input">
                    <div className="comment-header-img">
                        <img src="/static/images/profile.jpeg"  className="profile-header-post-pic"/>
                    </div>
                    <div className="comment-input-container">
                        <form onSubmit={this.handleSubmit}>
                            <Input placeholder="Write Review *"   id="add-comment"
                                name="text"  type="text" inputCss="post-comment"   
                                value={text}  handleChange={this.handleChange}  
                            />
                        </form>
                    </div>
                </div>
                <div className="comment-list">
                   {this.showComment(comments)}
                </div>
            </div>
        )
    }
}

export default CardComment;