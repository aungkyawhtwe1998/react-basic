import React, {Component} from "react";
import {useLocation, useNavigate} from "react-router-dom";

class EditPost extends Component{
    constructor(props) {
        super(props);
        const post = this.props.state.state.post;
        this.state = {
            id:post.id,
            title:post.title,
            desc:post.desc
        }
        console.log(post);
    }
    updatePost(e){
        e.preventDefault();
        console.log(this.state)
        this.props.updatePost(this.state);
        this.props.navigate("/")
    }
    render() {
        return(
            <div className="card bg-dark px-5 mt-2">
                <h3 className="text-white text-center mt-3">Add new Post</h3>
                <form onSubmit={this.updatePost.bind(this)}>
                    <label htmlFor="" className="form-label text-white">Post Title</label>
                    <input type="text" className="form-control rounded-0" id="title" onChange={e=> this.setState({title:e.target.value})} value={this.state.title}/>

                    <label htmlFor="" className="form-label text-white">Post Description</label>
                    <input type="text" className="form-control rounded-0" id="desc" onChange={e=> this.setState({desc:e.target.value})} value={this.state.desc}/>

                    <div id="emailHelp" className="form-next"></div>
                    <button type="submit" className="btn btn-primary mt-2 float-end">Add</button>
                </form>
            </div>
        )
    }
}

export default (props) =>{
    let navigate = useNavigate();
    let state = useLocation();
    return <EditPost {...props} navigate={navigate} state={state} />
}