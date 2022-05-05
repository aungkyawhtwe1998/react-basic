import React, {Component} from "react";
import userImage from "../images/profile.jpeg";
import {Link} from "react-router-dom";
class PostCard extends Component{
    delete(){
        this.props.remove(this.props.post.id)
    }
    render() {
        let post = this.props.post;
        return (
            <div className="card mb-1">
                <div className="row p-2">
                    <div className="col-2">
                        <img src={userImage} width="50" height="50" alt=""/>
                    </div>
                    <div className="col-5">
                        <h4>{post.title}</h4>
                        <p>{post.desc}</p>

                    </div>
                    <div className="col-5 my-auto">
                       <Link to={`/post/${post.id}`} state={{post:post}}>
                           <button className="btn btn-sm btn-info" >
                               <i className="fa fa-eye"></i>
                           </button>
                       </Link>
                        <Link to={`/post/edit/${post.id}`} state={{post:post}}>
                            <button className="btn btn-sm btn-warning mx-1">
                                <i className="fa fa-edit"></i>
                            </button>
                        </Link>
                        <button className="btn btn-sm btn-danger" onClick={this.delete.bind(this)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default PostCard