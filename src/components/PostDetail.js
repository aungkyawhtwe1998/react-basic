import React, {Component} from "react";
import userImage from '../images/profile.jpeg';
import {useLocation, Link} from 'react-router-dom';
class PostDetail extends Component{
    render() {
        console.log(this.props)
        const post = this.props.state.state.post;

        return (
            <div>
                <Link to="/">
                    <button className="btn btn-sm btn-primary"><i className="fa fa-arrow-left"></i></button>
                </Link>
                <div className="card">
                    <img src={userImage} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.desc}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        );
    }
}

export default (props)=>{
    const state = useLocation();
    return <PostDetail {...props} state={state} />
};