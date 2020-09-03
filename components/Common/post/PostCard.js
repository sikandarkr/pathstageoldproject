import React,{Component} from 'react';

class PostCard extends Component{
    render(){
        return(
            <div className="post-card">
               {this.props.children}
            </div>
        )
    }
}

export default PostCard;