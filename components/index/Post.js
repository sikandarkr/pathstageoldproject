import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import Link from "next/link";
import { LikeOutlined,CommentOutlined,ShareAltOutlined  } from "@ant-design/icons";
import PostCard from '../Common/post/PostCard';
import CardHeader from '../Common/post/CardHeader';
import CardContent from '../Common/post/CardContent';
import CardFooter from '../Common/post/CardFooter';
import CardComment from '../Common/post/CardComment';

class Post extends React.PureComponent {
  state = {
    isLiked: true,
    numLikes: 0,
    comments: []
  };

  componentDidMount() {
    this.setState({
      isLiked: this.checkLiked(this.props.post.likes),
      numLikes: this.props.post.likes.length,
      comments: this.props.post.comments
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.post.likes.length !== this.props.post.likes.length) {
      this.setState({
        isLiked: this.checkLiked(this.props.post.likes),
        numLikes: this.props.post.likes.length
      });
    }

    if (prevProps.post.comments.length !== this.props.post.comments.length) {
      this.setState({
        comments: this.props.post.comments
      });
    }
  }

  checkLiked = likes => likes.includes(this.props.auth.user._id);

  formatTimeCreated = time =>
    distanceInWordsToNow(time, {
      includeSeconds: true,
      addSuffix: true
    });

  render() {
    const {
      post,
      auth,
      isDeletingPost,
      handleDeletePost,
      handleToggleLike,
      handleAddComment,
      handleDeleteComment,
    } = this.props;
    const { isLiked, numLikes, comments } = this.state;
    const isPostCreator = post.postedBy._id === auth.user._id;
    return (
          <PostCard>
              <CardHeader
                time={this.formatTimeCreated(post.createdAt)}
                name={post.postedBy.name}
                id={post.postedBy._id}
                avatar={post.postedBy.avatar}
              />
              <CardContent
                text={post.text}
                image={post.image}
              />
              <div className="card-footer">   
                <p><LikeOutlined className={isLiked?`likeChecked`:`social`} onClick={() => handleToggleLike(post)}/> <span className="social-text">{numLikes} upvote</span></p>
                <p><CommentOutlined className="social"/> <span className="social-text">{comments.length}</span></p>
                <p><ShareAltOutlined className="social"/> <span className="social-text">122</span></p>
              </div>
              <CardComment
                auth={auth}
                postId={post._id}
                comments={comments}
                handleAddComment={handleAddComment}
              // handleDeleteComment={handleDeleteComment}
              />
          </PostCard>
      
    );
  }
}



export default Post;
