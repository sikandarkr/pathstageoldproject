import React,{Component} from 'react';

class CardContent extends Component{
    
    render(){
        const {image,text} =this.props;
        return(
            <div  className="card-content">
                <div>
                    <p className="post-title">Android Developer</p>
                    <p className="post-description">{text}</p>
                </div>
                <div className="post-banner">
                    {image && (
                            <img  src={image}  />
                        )}
                </div>
            </div>
        )
    }
}

export default CardContent;